import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient:HttpClient) { }   // DI for HttpClient

  getAllProductDetails():Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:9090/product/productFromDb");
  }
}
