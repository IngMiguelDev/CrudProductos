import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductMockupService {

  private productsUrl = 'assets/data/products.json'; 

  constructor(private http: HttpClient) { }

  getProducts(): Observable<{ data: any[] }> {
    return this.http.get<{ data: any[] }>(this.productsUrl);
  }
}
