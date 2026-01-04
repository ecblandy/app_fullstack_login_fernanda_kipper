import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly ACCESS_KEY = 'access';
  private readonly REFRESH_KEY = 'refresh';

  setToken(access: string, refresh: string): void {
    sessionStorage.setItem(this.ACCESS_KEY, access);
    sessionStorage.setItem(this.REFRESH_KEY, refresh);
  }

  getAccessToken(): string | null {
    return sessionStorage.getItem(this.ACCESS_KEY);
  }

  getRefreshToken() {
    return sessionStorage.getItem(this.REFRESH_KEY);
  }

  clear(): void {
    sessionStorage.removeItem(this.ACCESS_KEY);
    sessionStorage.removeItem(this.REFRESH_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getRefreshToken();
  }
}
