import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { User } from '../prooduct-type';

@Component({
  selector: 'app-user-category',
  templateUrl: './user-category.component.html',
  styleUrls: ['./user-category.component.scss']
})
export class UserCategoryComponent implements OnInit {
  @Input() users: User = undefined;  
  @Output() categoryFromChildEvent: EventEmitter<User> = new EventEmitter<User>();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

}
