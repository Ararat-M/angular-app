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
    username: new FormControl<string>("", [
      Validators.required
    ]),
    password: new FormControl<string>("", [
      Validators.required
    ])
  })

  submit() {
    if (!(this.form.controls.username.value && this.form.controls.password.value)) {
      this.snackbar.open("введите имя пользователя и пароль", "", {
        duration: 3000,
        panelClass: ["snackbar-error"]
      })

      return
    }

    this.authService.login({
      username: this.form.value.username as string,
      password: this.form.value.password as string
    })
    
    if (!this.authService.isAuth$.value) {
      this.snackbar.open("неверное имя пользователя или пароль", "", {
        duration: 3000,
        panelClass: ["snackbar-error"]
      })
    }
  }
}
