import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event/event.component';
import { EventScreenComponent } from './event-screen/event-screen.component';



@NgModule({
  declarations: [
    EventComponent,
    EventScreenComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
