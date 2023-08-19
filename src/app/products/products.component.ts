import { Component, OnInit } from "@angular/core";
import { Product } from "../models/Product";
import { ProductService } from "../shared/services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  currentPage = 1;
  itemsPerPage = 6; // Adjust the number of items per page as needed
  totalPages: number[] = [];

  breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/category/categoryname" },
    { label: "Product Name", link: "/products/product-id" },
  ];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const categoryName = params.get("categoryName");
      this.loadProductsByCategory(categoryName);
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const categoryName = params.get("categoryName");
      this.loadProductsByCategory(categoryName);
    });
  }

  onFilterApplied(filterOptions: any) {
    // Implement filtering logic based on filterOptions
    // For example, filter products by name and price range
    // Update this.products with the filtered results
  }

  loadProductsByCategory(categoryName: string) {
    this.productService
      .getProductsByCategory(categoryName)
      .subscribe((products) => {
        this.products = products;
        this.calculateTotalPages();
      });
  }

  calculateTotalPages() {
    this.totalPages = Array.from(
      { length: Math.ceil(this.products.length / this.itemsPerPage) },
      (_, i) => i + 1
    );
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
    }
  }

  getPaginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }
}
