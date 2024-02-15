import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../product/prooduct-type';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() userDetailsDisplay: User;

  ngOnInit(): void {
  }

}
