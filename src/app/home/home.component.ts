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
  cardItems: CardItem[] = [
    {
      icon: "ni ni-check-bold",
      name: "services",
      title: "Services",
      color: "primary",
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
