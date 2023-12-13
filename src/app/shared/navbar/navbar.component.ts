import { Component, OnInit } from '@angular/core';

type MenuItem = {
  title: string;
  icon: string;
  link: string;
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpen = false;
  menuItems: MenuItem[]

  constructor() {
    this.menuItems = [
      { title: 'Dashboard', icon: 'space_dashboard', link: '/' },
      { title: 'Event', icon: 'graphic_eq', link: '/event' },
      { title: 'Product', icon: 'auto_stories', link: '/product' }
    ];
  }

  ngOnInit(): void {
  }

  toggleIsOpen(): void {
    this.isOpen = !this.isOpen;
  }

}
