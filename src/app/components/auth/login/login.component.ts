import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lform: FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService) { }

  ngOnInit(): void {
    this.lform = this.fb.group({
      email: '',
      password: ''
    });
  }

  onFormSubmit(): void {
    this.authService.SignIn(this.lform.value.email, this.lform.value.password);
    console.log("Authenticated")
  };


}
