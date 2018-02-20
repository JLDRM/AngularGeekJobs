import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { loginEmp } from '../../models/loginEmp';

@Component({
  selector: 'app-form-login-emp',
  templateUrl: './form-login-emp.component.html',
  styleUrls: ['./form-login-emp.component.css']
})
export class FormLoginEmpComponent implements OnInit {

  loginEmpForm: FormGroup;

  login: loginEmp = {
    email_emp: "",
    password_emp: "",
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginEmpForm = this.fb.group ({
      email_emp:'',
      password_emp:'',
})
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
      Validators.minLength(3),
      Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$")
    ]),
  })
}

ngOnChanges() {
}

onSubmit(){
  if(this.loginEmpForm.valid){
    console.log('Bienvenid@ a Geek Empresas');

  }else{
    alert('Lo sentimos, se ha producido un error')
  }
  
}
}

