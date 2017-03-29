import { Component }    from '@angular/core';
import { Router }       from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: '../../../templates/signup/signup.html',
})

export class SignupComponent {
    client: any = {};
    errorInLogin: Boolean = false;

    constructor(private router: Router) {
    }

    goBack() {
        this.router.navigate(['home']);
    }

    createNewAccount() {
    }
} 