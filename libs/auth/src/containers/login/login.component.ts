import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Authenticate, User } from '@demo-app/data-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  login(authenticate: Authenticate) {
    this.authService
      .login(authenticate)
      .subscribe((user: User) =>
        this.router.navigate([`/user-profile/${user.id}`])
      );
  }
}
