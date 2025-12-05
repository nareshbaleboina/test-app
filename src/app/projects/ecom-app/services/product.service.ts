import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/ecom.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  constructor() {}

  getProducts() {
    const categoryUrl =
      'https://fakestoreapi.com/products/category/electronics';
    const url = `https://fakestoreapi.com/products`;
    return this.http.get<Array<Product>>(url);
  }
}
