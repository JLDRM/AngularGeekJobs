import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginEmp } from '../../models/loginEmp';

@Component({
  selector: 'app-form-login-emp',
  templateUrl: './form-login-emp.component.html',
  styleUrls: ['./form-login-emp.component.css']
})
export class FormLoginEmpComponent implements OnInit, OnChanges {

  loginEmpForm: FormGroup;

  login: LoginEmp = {
    email_emp: '',
    password_emp: ''
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginEmpForm = this.fb.group({
      email_emp: '',
      password_emp: ''
    });
  }

  ngOnInit(): void {

    this.loginEmpForm = new FormGroup({
      'email_emp': new FormControl(this.login.email_emp, [
        Validators.required,
        Validators.minLength(3),
        Validators.email
      ]),
      'password_emp': new FormControl(this.login.password_emp, [
        Validators.required,
      
      ]),
    });
  }

  ngOnChanges() { }

  onSubmit() {
    if (this.loginEmpForm.valid) {
      console.log('Bienvenid@ a Geek Empresas');

    } else {
      alert('Lo sentimos, se ha producido un error')
    }

  }
}

