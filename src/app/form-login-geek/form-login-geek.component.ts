import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginGeek } from '../../models/loginGeek';

@Component({
  selector: 'app-form-login-geek',
  templateUrl: './form-login-geek.component.html',
  styleUrls: ['./form-login-geek.component.css']
})
export class FormLoginGeekComponent implements OnInit, OnChanges {
  loginGeekForm: FormGroup;

  login: LoginGeek = {
    email_geek: '',
    password_geek: ''
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginGeekForm = this.fb.group({
      email_geek: ['', Validators.required],
      password_geek: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loginGeekForm = new FormGroup({
      'email_geek': new FormControl(this.login.email_geek, [
        Validators.required,
        Validators.minLength(3),
        Validators.email
      ]),
      'password_geek': new FormControl(this.login.password_geek, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$')
      ]),
    });
  }

  ngOnChanges() {
  }

  onSubmit() {
    if (this.loginGeekForm.valid) {
      console.log('Bienvenid@ a Geek Jobs');

    } else {
      alert('Lo sentimos, se ha producido un error')
    }

  }
}
