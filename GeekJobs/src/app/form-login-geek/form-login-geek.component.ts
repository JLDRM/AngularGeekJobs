import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { loginGeek } from '../../models/loginGeek';

@Component({
  selector: 'app-form-login-geek',
  templateUrl: './form-login-geek.component.html',
  styleUrls: ['./form-login-geek.component.css']
})
export class FormLoginGeekComponent implements OnInit {

  loginGeekForm: FormGroup;

  login: loginGeek = {
    email_geek: "",
    password_geek: "",
  }

  emailPattern: "^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$";
  passwordPattern: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$;";

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginGeekForm = this.fb.group ({
      email_geek:['', Validators.required],
      password_geek:['', Validators.required], 
})
}

ngOnInit(): void {

  this.loginGeekForm = new FormGroup({
    'email': new FormControl(this.login.email_geek, [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(this.emailPattern)
    ]),
    'password': new FormControl(this.login.password_geek, [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(this.passwordPattern)
    ]),
  })
}

ngOnChanges() {
}
}
