import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: '../../../templates/users/users.html',
})

export class UsersComponent {
  constructor( public router: Router) {

  }

}