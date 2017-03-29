import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent }  from './components/singup/singup.component';
import { LoginComponent }  from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { UsersComponent } from './components/users/users.component';

const appRoutes: Routes = [
  { path: 'home', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'main', component: MainComponent},
  { path: 'users', component: UsersComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent, SignupComponent, LoginComponent, MainComponent, UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
