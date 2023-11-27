import { Component, OnInit , OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

//interface

interface Category {
  'title': string
}

interface Categories {
  categories: Category[];
}



@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  categories: Category[];
  fakeAPIUrl = "https://dummyjson.com/products/categories"

  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {
    this._subscription = new Subscription();
    this.categories = [];
  }

  ngOnInit(): void {
    // this.fetchDataInit();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  fetchDataInit(): void {
    this.isLoading = true;
    this._subscription.add(
      this.http.get<Categories>(this.fakeAPIUrl).subscribe({
        next: (data) => {
          // Means success
          this.isLoading = false;
          this.categories = data.categories;
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
