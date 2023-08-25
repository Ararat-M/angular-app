import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  constructor(
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) { }

  form = new FormGroup({
    email: new FormControl<string>("", [
      Validators.required
    ]),
    password: new FormControl<string>("", [
      Validators.required
    ])
  })

  get email(): string {
    return this.form.controls.email.value ?? ''
  }

  get password(): string {
    return this.form.controls.password.value ?? ''
  }

  submit() {
    if (this.email && this.password) {
      if (!this.authService.login(this.email, this.password)) {
        this.snackbar.open("неверное имя пользователя или пароль", "", {
          duration: 3000,
          panelClass: ["snackbar-error"]
        })
      }
    } else {
      this.snackbar.open("введите имя пользователя и пароль", "", {
        duration: 3000,
        panelClass: ["snackbar-error"]
      })
    }
  }
}
