import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor(private router: Router) { }


redirectToDashboard() {
  this.router.navigate(['/dashboard']);
}
  ngOnInit() {
  }

}
