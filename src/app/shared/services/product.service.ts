import { Injectable } from "@angular/core";
import { HttpParams, HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "src/app/models/Product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor() {}

  getProductsByCategory(categoryName: string): Observable<Product[]> {
    return new Observable<Product[]>((observer) => {
      const mockProducts: Product[] = [
        {
          id: 1,
          name: "Service 1",
          category: "services",
          price: 19.99,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Service 2",
          category: "job",
          price: 29.99,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Service 2",
          category: "job",
          price: 29.99,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 1,
          name: "Service 1",
          category: "services",
          price: 19.99,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Service 2",
          category: "job",
          price: 29.99,
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Service 2",
          category: "job",
          price: 29.99,
          imageUrl: "https://via.placeholder.com/150",
        },
        { id: 1, name: "Service 1", category: "services", price: 19.99 , imageUrl: "https://via.placeholder.com/150" },
        { id: 2, name: "Service 2", category: "job", price: 29.99,  imageUrl: "https://via.placeholder.com/150" },
        { id: 2, name: "Service 2", category: "job", price: 29.99,  imageUrl: "https://via.placeholder.com/150" },
        { id: 1, name: "Service 1", category: "services", price: 19.99 , imageUrl: "https://via.placeholder.com/150" },
        { id: 2, name: "Service 2", category: "job", price: 29.99,  imageUrl: "https://via.placeholder.com/150" },
        { id: 2, name: "Service 2", category: "job", price: 29.99,  imageUrl: "https://via.placeholder.com/150" },
        // Add other products for the selected category
      ].map((product) => ({
        ...product,
        categoryName: product.category,
      }));
      observer.next(mockProducts);
      observer.complete();
    });
  }
}
