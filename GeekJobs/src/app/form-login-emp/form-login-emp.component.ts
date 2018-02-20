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

  emailPattern: "^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$";
  passwordPattern: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$;";

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.loginEmpForm = this.fb.group ({
      email_emp:['', Validators.required],
      password_emp:['', Validators.required], 
})
}

ngOnInit(): void {

  this.loginEmpForm = new FormGroup({
    'email': new FormControl(this.login.email_emp, [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$")
    ]),
    'password': new FormControl(this.login.password_emp, [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$;")
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

