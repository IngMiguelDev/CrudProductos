import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string;
  private complementUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.endpoint;
    this.complementUrl = 'api/products/';
  }

  getProductsApi(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}${this.complementUrl}`);
  }

  deleteProductsApi(id: number): Observable<Product[]> {
    return this.http.delete<Product[]>(`${this.apiUrl}${this.complementUrl}${id}`);
  }

  saveProductApi(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}${this.complementUrl}`, product);
  }
  
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}${this.complementUrl}${id}`);
  }
  updateProductApi(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}${this.complementUrl}${product.id}`, product);
  }
}
