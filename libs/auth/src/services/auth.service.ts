import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User, Authenticate } from '@demo-app/data-models';

@Injectable()
export class AuthService {
  user: User;
  isAuthenticated: boolean;

  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate) {
    return this.httpClient
      .post('http://localhost:3000/login', authenticate)
      .pipe(
        tap((user: User) => {
          this.isAuthenticated = true;
          this.user = user;
          this.setAuthToken(user.token);
        })
      );
  }

  setAuthToken(token: string) {
    localStorage.setItem('token', token);
  }

  getAuthToken(): string {
    return localStorage.getItem('token');
  }

  clearAuthToken() {
    localStorage.removeItem('token');
  }
}
