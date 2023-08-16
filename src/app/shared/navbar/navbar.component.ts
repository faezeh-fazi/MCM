import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

interface CardItem {
    icon: string;
    name: string;
    title: string;
    description: string;
    color: string;
  }
  
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    cardItems: CardItem[] = [
        {
          icon: "ni ni-check-bold",
          name: "vehicles",
          title: "Vehicles",
          color: "warning",
          description: "Description for Download Argon",
        },
        {
          icon: "ni ni-check-bold",
          name: "education",
          title: "Education",
          color: "primary",
          description: "Description for Download Argon",
        },
        {
          icon: "ni ni-check-bold",
          name: "services",
          title: "Services",
          color: "warning",
          description: "Description for Download Argon",
        },
        {
          icon: "ni ni-istanbul",
          name: "electronic",
          title: "Electronic",
          color: "success",
          description: "Description for Build Something",
        },
        {
          icon: "ni ni-planet",
          name: "furniture",
          title: "Furniture",
          color: "warning",
          description: "Description for Prepare Launch",
        },
        {
          icon: "ni ni-check-bold",
          name: "job",
          title: "Job",
          color: "primary",
          description: "Description for Download Argon",
        },
    
        // Add more categories here as needed
      ];
    constructor(public location: Location, private router: Router, private elementRef: ElementRef) {
    }

 
    ngOnInit() {
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url != this.lastPoppedUrl)
               this.yScrollStack.push(window.scrollY);
       } else if (event instanceof NavigationEnd) {
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else
               window.scrollTo(0, 0);
       }
     });
     this.location.subscribe((ev:PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '#/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '#/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
