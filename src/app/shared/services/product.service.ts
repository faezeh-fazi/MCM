import { Injectable } from "@angular/core";
import { HttpParams, HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Product } from "src/app/models/Product";

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Service 1",
    description : "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    category: "services",
    price: 19.99,
    mainImageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2018-01/29/14/asset/buzzfeed-prod-fastlane-02/sub-buzz-29575-1517253581-23.jpg?downsize=900:*&output-format=auto&output-quality=auto",
    thumbnailUrls: ["https://via.placeholder.com/150"],
  },
  {
    id: 2,
    name: "Service 2",
    description : "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    category: "job",
    price: 49.99,
    mainImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKXrExPBPZJsGMVp3X_TMALZwC41G-qZvcQ&usqp=CAU",
    thumbnailUrls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKXrExPBPZJsGMVp3X_TMALZwC41G-qZvcQ&usqp=CAU" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQv_vEo1ZkAspe9t9aFGqmaw_RbaA1SBH2COxeVMZ53SNOtQaIYvScmR1Xfmd2Tfg4EQ&usqp=CAU"],
  },
  {
    id: 3,
    name: "Service 2",
    description : "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    category: "job",
    price: 29.99,
    mainImageUrl: "https://via.placeholder.com/150",
    thumbnailUrls: ["https://via.placeholder.com/150"],
  },
  {
    id: 4,
    name: "Service 1",
    description : "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    category: "services",
    price: 19.99,
    mainImageUrl:
      "data:image/jpeg;base64,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",
    thumbnailUrls: ["https://via.placeholder.com/150"],
  },
  {
    id: 5,
    name: "Service 2",
    description : "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    category: "job",
    price: 29.99,
    mainImageUrl: "https://www.byrdie.com/thmb/VnozTfu2yu4H5gRPtugHyuufXzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/15-best-curly-hair-products-tout-8cd55384c9cc45e88b1ab40d627723df.jpg",
    thumbnailUrls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sab1IOvMPy0I-UJkDKRPm4YzTZZCLcCHtWD_t6M9YfP_dYSC4Tb40D94NVe7tm955u8&usqp=CAU" , "https://img.buzzfeed.com/buzzfeed-static/static/2018-01/29/14/asset/buzzfeed-prod-fastlane-02/sub-buzz-29575-1517253581-23.jpg?downsize=900:*&output-format=auto&output-quality=auto"],
  },
  {
    id: 6,
    name: "Service 2",
    description : "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    category: "job",
    price: 29.99,
    mainImageUrl: "https://via.placeholder.com/150",
    thumbnailUrls: ["https://via.placeholder.com/150"],
  },
  {
    id: 7,
    name: "Service 1",
    description : "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    category: "services",
    price: 19.99,
    mainImageUrl: "https://via.placeholder.com/150",
    thumbnailUrls: ["https://via.placeholder.com/150"],
  },
  {
    id: 8,
    name: "Service 2",
    description : "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    category: "job",
    price: 29.99,
    mainImageUrl: "https://via.placeholder.com/150",
    thumbnailUrls: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  // Add other products for the selected category
];

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor() {}

  getProductsByCategory(categoryName: string): Observable<Product[]> {
    return new Observable<Product[]>((observer) => {
      mockProducts.map((product) => ({
        ...product,
        categoryName: product.category,
      }));
      observer.next(mockProducts);
      observer.complete();
    });
  }

  getProductById(productId: number): Observable<Product> {
    // Implement your logic to find a product by its ID here
    const product = mockProducts.find((p) => p.id === productId);
    return of(product);
  }
}
