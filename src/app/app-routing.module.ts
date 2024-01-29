import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductScreenComponent } from "./feature/product";

const routes: Routes = [
  // {path: '', pathMatch: "full", redirectTo: "product"},
  // {path: "product", component: ProductScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
