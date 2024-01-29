import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from "./feature/product";
import { HttpClientModule } from "@angular/common/http";
import { UserModule } from './feature/user';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule,
    ProductModule,
    UserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
