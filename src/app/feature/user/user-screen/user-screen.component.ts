import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, Users } from '../../product/prooduct-type';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.scss']
})
export class UserScreenComponent implements OnInit {

  private _subscription: Subscription;
  baseUrl = "https://dummyjson.com";  
  usersUrl = "/users"

  //properties
  users: User[];

  //cotor
  constructor(private http: HttpClient) { 
    this._subscription = new Subscription();
    this.users = [];
  }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void{
    this._subscription.add(
      this.http.get<Users>(this.baseUrl.concat(this.usersUrl)).subscribe({
        next: (data) => {
          this.users = data.users;
          console.log(data.users)
          console.warn('userList', data);
          
        },
        error: (error) => {
          // Means error
          console.warn('error', error)
        },
        complete: () => {}
      })
    );
  }


}
