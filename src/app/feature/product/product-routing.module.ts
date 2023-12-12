import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from "./product.service";
import { ProductScreenComponent } from "./product-screen/product-screen.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "product"},
  {path: "product", component: ProductScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [ProductService],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
