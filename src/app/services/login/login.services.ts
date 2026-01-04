import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../types/login-response.type';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServices {
  constructor(private httpClient: HttpClient) {}

  signin(email: string, password: string): Promise<LoginResponse> {
    return firstValueFrom(
      this.httpClient.post<LoginResponse>('/login', {
        email,
        password,
      })
    );
  }
}
