import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Authenticate } from '@demo-app/data-models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Output() submit = new EventEmitter<Authenticate>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  login(username: string, password: string) {
    this.submit.emit({ username, password });
  }
}
