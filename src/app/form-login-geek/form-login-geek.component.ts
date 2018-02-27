import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginGeek } from '../../models/loginGeek';
import { GeekService } from '../servicios/geek.service';

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

  constructor(private fb: FormBuilder, private post: GeekService) {
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
        Validators.required
      ]),
    });
  }

  ngOnChanges() {
  }

  onSubmit(dat) {
    let id;
    if (this.loginGeekForm.valid) {
      console.log(dat)
      this.post.postLoginUsuario(dat).subscribe(x => {
        console.log(x);
        id = x['_id'];
        
      });
      console.log(id);
      console.log('Bienvenid@ a Geek Jobs');
    } else {
      alert('Lo sentimos, se ha producido un error')
    }

  }
}
