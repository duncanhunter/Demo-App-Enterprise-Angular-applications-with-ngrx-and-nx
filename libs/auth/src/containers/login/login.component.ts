import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  login(username: string, password: string) {
    console.log(username, password);
  }
}
