import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authenticate } from '@demo-app/data-models';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate) {
    return this.httpClient.post('http://localhost:3000/login', authenticate);
  }
}
