import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/products';
import { environment } from 'src/environments/environment';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.endpoint + 'api/products/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should retrieve products from the API via GET', () => {
    const dummyProducts: Product[] = [
      { id: 1, name: 'Product 1', description: 'Desc 1', price: 100, stock_quantity: 10 },
      { id: 2, name: 'Product 2', description: 'Desc 2', price: 150, stock_quantity: 5 }
    ];

    service.getProductsApi().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products).toEqual(dummyProducts);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProducts); // Simula la respuesta del backend con los datos dummy
  });

  it('should delete a product from the API via DELETE', () => {
    service.deleteProductsApi(1).subscribe(response => {
      expect(response).toBeTruthy(); // Verifica que haya una respuesta
    });

    const req = httpMock.expectOne(`${apiUrl}1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({}); // Simula una respuesta vacía
  });

  it('should save a new product via POST', () => {
    const newProduct: Product = { id: 3, name: 'Product 3', description: 'Desc 3', price: 200, stock_quantity: 20 };

    service.saveProductApi(newProduct).subscribe(product => {
      expect(product).toEqual(newProduct);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(newProduct); // Simula la respuesta del backend con el producto creado
  });

  it('should retrieve a product by ID via GET', () => {
    const dummyProduct: Product = { id: 1, name: 'Product 1', description: 'Desc 1', price: 100, stock_quantity: 10 };

    service.getProductById(1).subscribe(product => {
      expect(product).toEqual(dummyProduct);
    });

    const req = httpMock.expectOne(`${apiUrl}1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProduct); // Simula la respuesta del backend con el producto específico
  });

  it('should update a product via PUT', () => {
    const updatedProduct: Product = { id: 1, name: 'Updated Product', description: 'Updated Desc', price: 120, stock_quantity: 8 };

    service.updateProductApi(updatedProduct).subscribe(product => {
      expect(product).toEqual(updatedProduct);
    });

    const req = httpMock.expectOne(`${apiUrl}1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedProduct);
  });
});
