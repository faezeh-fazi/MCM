import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SectionsModule } from "../sections/sections.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductsComponent } from "./products.component";
import { ProductService } from "../shared/services/product.service";
import { BreadcrumbModule } from "../breadcrumb/breadcrumb.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SectionsModule,
    NgbModule,
    BreadcrumbModule,
  ],
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
  providers: [ProductService],
})
export class ProductsModule {}
