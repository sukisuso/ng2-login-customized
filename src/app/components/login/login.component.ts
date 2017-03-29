import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: '../../../templates/login.html',
})
export class LoginComponent {
  constructor( public router: Router) {

  }
  
  loginAction() {
    this.router.navigate(['main']);
  }
}