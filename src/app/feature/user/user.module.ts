import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { UserCardComponent } from './user-card/user-card.component';



@NgModule({
  declarations: [
    UserScreenComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserScreenComponent
  ]
})
export class UserModule { }
