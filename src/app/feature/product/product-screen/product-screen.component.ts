import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Subscription } from "rxjs";
import { ProductType } from "../productType";

@Component({
  selector: 'app-product-screen',
  templateUrl: './product-screen.component.html',
  styleUrls: ['./product-screen.component.scss']
})
export class ProductScreenComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  products: ProductType[];
  isLoading: boolean;

  constructor(private productService: ProductService) {
    this._subscription = new Subscription();
    this.products = [];
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.fetchProductInit();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  fetchProductInit(): void {
    this.isLoading = true;
    this._subscription.add(
      this.productService.getProducts().subscribe({
        next: (data) => {
          this.isLoading = false;
          this.products = data;
        },
        error: (error) => {
          this.isLoading = false;
          console.warn('error', error);
        }
      })
    );
  }



}
