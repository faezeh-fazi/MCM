import { Component, OnInit } from "@angular/core";

interface CardItem {
  icon: string;
  name: string;
  title: string;
  description: string;
  color: string;
}
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;

  cardItems: CardItem[] = [
    {
      icon: "ni ni-bus-front-12",
      name: "vehicles",
      title: "Vehicles",
      color: "primary",
      description: "Description for Download Argon",
    },
    {
      icon: "ni ni-books",
      name: "education",
      title: "Education",
      color: "primary",
      description: "Description for Download Argon",
    },
    {
      icon: "ni ni-settings",
      name: "services",
      title: "Services",
      color: "primary",
      description: "Description for Download Argon",
    },
    {
      icon: "ni ni-mobile-button",
      name: "electronic",
      title: "Electronic",
      color: "primary",
      description: "Description for Build Something",
    },
    {
      icon: "ni ni-bulb-61",
      name: "furniture",
      title: "Furniture",
      color: "primary",
      description: "Description for Prepare Launch",
    },
    {
      icon: "ni ni-briefcase-24",
      name: "job",
      title: "Job",
      color: "primary",
      description: "Description for Download Argon",
    },

    // Add more categories here as needed
  ];

  model = {
    left: true,
    middle: false,
    right: false,
  };

  focus;
  focus1;
  constructor() {}

  ngOnInit() {}
}
