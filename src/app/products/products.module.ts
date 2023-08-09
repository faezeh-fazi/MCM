import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SectionsModule } from "../sections/sections.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductsComponent } from "./products.component";
import { ProductService } from "../shared/services/product.service";
import { BreadcrumbModule } from "../breadcrumb/breadcrumb.module";
import { ProductFilterComponent } from "../product-filter/product-filter.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SectionsModule,
    NgbModule,
    BreadcrumbModule,
    ReactiveFormsModule
  ],
  declarations: [ProductsComponent, ProductFilterComponent],
  exports: [ProductsComponent],
  providers: [ProductService],
})
export class ProductsModule {}
