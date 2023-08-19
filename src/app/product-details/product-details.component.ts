import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../models/Product";
import { ProductService } from "../shared/services/product.service";
import { ContactSellerComponent } from "../contact-seller/contact-seller.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  mainImageUrl: string;
  activeThumbnailIndex: number = 0;

  breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/category/:categoryname" },
    { label: "Product Name", link: "/products/product-id" },
  ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get("id"));
      this.loadProductDetails(productId);
    });

    this.mainImageUrl = this.product.thumbnailUrls[0];
  }

  switchMainImage(thumbnailUrl: string) {
    this.mainImageUrl = thumbnailUrl;
  }
  navigateThumbnails(direction: string) {
    if (direction === "left") {
      this.activeThumbnailIndex =
        (this.activeThumbnailIndex - 1 + this.product.thumbnailUrls.length) %
        this.product.thumbnailUrls.length;
    } else if (direction === "right") {
      this.activeThumbnailIndex =
        (this.activeThumbnailIndex + 1) % this.product.thumbnailUrls.length;
    }
    this.mainImageUrl = this.product.thumbnailUrls[this.activeThumbnailIndex];
  }
  loadProductDetails(productId: number) {
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }
  open(){
    const modalRef = this.modalService.open(ContactSellerComponent);
  modalRef.componentInstance.name = "Contact";
  }
}
