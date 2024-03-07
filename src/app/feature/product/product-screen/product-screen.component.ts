import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subscription, concat } from 'rxjs';
import {Product, Products, User, Users} from "../prooduct-type";

//TODO: Create a category list interface

@Component({
  selector: 'app-product-screen',
  templateUrl: './product-screen.component.html',
  styleUrls: ['./product-screen.component.scss']
})
export class ProductScreenComponent implements OnInit, OnDestroy {
  //TODO: This is the dirty way, we will clean it up later with a proper refactoring
  private _subscription: Subscription;
  baseUrl = "https://dummyjson.com";
  productsUrl = "/products"
  categoriesUrl = "/products/categories"
  usersUrl = "/users"

 

  products: Product[];
  categories: string[];
  users: User[];

  category: string = "";

  

  isLoading: boolean = false;
  errorMessage: string | null = null;


  constructor(private http: HttpClient) {
    this._subscription = new Subscription();
    this.categories = [];
    this.products = [];
    this.users = [];
  }

  ngOnInit(): void {
    this.fetchProductDataInit();
    this.fetchCategoryDataInit();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  fetchProductDataInit(): void {
    this.isLoading = true;
    this._subscription.add(
      this.http.get<Products>(this.baseUrl.concat(this.productsUrl)).subscribe({
        next: (data) => {
          // Means success
          this.isLoading = false;
          this.products = data.products;
          console.warn('productData', data);
        },
        error: (error) => {
          // Means error
          this.isLoading = false;
          this.errorMessage = error.message;
          console.warn('error', error)
        },
        complete: () => {}
      })
    );
  }

  fetchCategoryDataInit(): void {
    this.isLoading = true;
    this._subscription.add(
      this.http.get<string[]>(this.baseUrl.concat(this.categoriesUrl)).subscribe({
        next: (data) => {
          // Means success
          this.categories = data;
          console.warn('categoryData', data);
        },
        error: (error) => {
          // Means error
          this.isLoading = false;
          this.errorMessage = error.message;
          console.warn('error', error)
        },
        complete: () => {}
      })
    );
  }
  
  
  

  categoryReceiveParentEvent($event: string): void {
    this.category = $event;
    //console.warn("event from child >>>>>", $event);
  }

}
