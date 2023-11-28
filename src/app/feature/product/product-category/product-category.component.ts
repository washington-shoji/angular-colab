import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit, OnDestroy {
  @Input() category: string = "";
  @Output() categoryFromChildEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  sendCategory(categoryItem: string): void {
    this.categoryFromChildEvent.emit(categoryItem);
  }

}
