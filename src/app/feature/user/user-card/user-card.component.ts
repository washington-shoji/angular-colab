import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../product/prooduct-type';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Output() userSelected = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  onUserSelection(user: User){
    this.userSelected.emit(user);
  }

}
