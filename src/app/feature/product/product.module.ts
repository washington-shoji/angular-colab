import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductScreenComponent } from './product-screen/product-screen.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductScreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
