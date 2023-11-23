import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductScreenComponent } from './product-screen/product-screen.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    ProductScreenComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule
  ]
})
export class ProductModule { }
