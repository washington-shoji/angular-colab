import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "dashboard" },
  { path: "dashboard", component: DashboardScreenComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule { }
