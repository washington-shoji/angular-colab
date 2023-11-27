import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductScreenComponent } from './product-screen/product-screen.component';
import { ProductCategoryComponent } from './product-category/product-category.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductScreenComponent,
    ProductCategoryComponent    
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
