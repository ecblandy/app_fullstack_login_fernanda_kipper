import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout';
import { App } from "../../app";

@Component({
  selector: 'app-login',
  imports: [DefaultLoginLayoutComponent, App],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {}
