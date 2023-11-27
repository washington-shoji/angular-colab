import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subscription, concat } from 'rxjs';


//controls the information that we are going to use from the API call
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
interface Category {
  "title": string
}

interface Categories {
  categories: Category[];
}



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
  // TODO: Create a url variable for the categories
  categoriesUrl = "/products/categories"


  products: Product[];
  // TODO: Create, a categories (array/list) variable for the data with the category type
  categories: Category[];

  isLoading: boolean = false;
  errorMessage: string | null = null;


  constructor(private http: HttpClient) {
    this._subscription = new Subscription();
    this.categories = [];
    this.products = [];
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
      this.http.get<Categories>(this.baseUrl.concat(this.categoriesUrl)).subscribe({
        next: (data) => {
          // Means success
          this.categories = data.categories;
          console.warn('categoryData', data);
          console.log(this.categories)
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
