import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  form = new FormGroup({
    username: new FormControl<string>("", [
      Validators.required
    ]),
    password: new FormControl<string>("", [
      Validators.required
    ])
  })

  constructor() { 
    
  }

  submit() { }
}
