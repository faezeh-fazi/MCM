import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { ProductsModule } from './products/products.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactSellerComponent } from './contact-seller/contact-seller.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ProductFilterComponent } from './product-filter/product-filter.component';


@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LandingComponent,
        ProfileComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        ProductDetailsComponent,
        ContactSellerComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule,
        ProductsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
        BreadcrumbModule,
        ReactiveFormsModule,
    ]
})
export class AppModule { }
