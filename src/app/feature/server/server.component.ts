import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, Users } from '../product/prooduct-type';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  ngOnInit(): void {
  }

}
