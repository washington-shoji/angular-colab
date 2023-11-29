import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from "./feature/product";
import { HttpClientModule } from "@angular/common/http";
import { ProductCategoryComponent } from './feature/product/product-category/product-category.component';
import { UserCategoryComponent } from './feature/product/user-category/user-category.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
