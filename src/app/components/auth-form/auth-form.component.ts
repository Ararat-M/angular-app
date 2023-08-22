import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  constructor(
    private authService: AuthService
  ) { }

  @Output() authEvent = new EventEmitter<boolean>();

  form = new FormGroup({
    username: new FormControl<string>("", [
      Validators.required
    ]),
    password: new FormControl<string>("", [
      Validators.required
    ])
  })

  submit() {
    this.authEvent.emit(this.authService.login({ 
      username: this.form.value.username as string, 
      password: this.form.value.password as string
    }));
  }
}
