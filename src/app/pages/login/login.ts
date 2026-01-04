import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';
import { LoginServices } from '../../services/login/login.services';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [DefaultLoginLayoutComponent, ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginServices,
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    });
  }

  async submit() {
    try {
      const { email, password } = this.loginForm.getRawValue();

      const response = await this.loginService.signin(email!, password!);

      this.authService.setToken(response.access, response.refresh);

      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro no login', error);
    }
  }
  navigate() {
    this.router.navigate(['/signup']);
  }
}
