import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ProductType } from "./productType";
import { APIEndpoints } from "../../shared";


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    const url = APIEndpoints.productApi.products();
    return this.http.get<ProductType[]>(url);
  }
}
