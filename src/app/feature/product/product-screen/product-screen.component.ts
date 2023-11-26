import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";

interface Product {
  "id": number,
  "title": string,
  "description": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "brand": string,
  "category": string,
  "thumbnail": string,
  "images": string[]
}

interface Products {
  products: Product[];
}

//TODO: Create category interface, create a category list interface

//TODO: Create a category list interface

@Component({
  selector: 'app-product-screen',
  templateUrl: './product-screen.component.html',
  styleUrls: ['./product-screen.component.scss']
})
export class ProductScreenComponent implements OnInit, OnDestroy {
  //TODO: This is the dirty way, we will clean it up later with a proper refactoring

  private _subscription: Subscription;

  fakeAPIUrl = "https://dummyjson.com/products";
  // TODO: Create a url variable for the categories
  // https://dummyjson.com/products/categories

  products: Product[];
  // TODO: Create, a categories (array/list) variable for the data with the category type

  isLoading: boolean = false;
  errorMessage: string | null = null;



  constructor(private http: HttpClient) {
    this._subscription = new Subscription();
    this.products = [];
  }

  ngOnInit(): void {
    this.fetchDataInit();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  fetchDataInit(): void {
    this.isLoading = true;
    this._subscription.add(
      this.http.get<Products>(this.fakeAPIUrl).subscribe({
        next: (data) => {
          // Means success
          this.isLoading = false;
          this.products = data.products;
          console.warn('data', data);
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

}
