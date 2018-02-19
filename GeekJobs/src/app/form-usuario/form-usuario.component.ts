import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.usuarioForm = this.fb.group ({
    nombre:'',
    apellido:'',
    email:'',
    contraseña:'',
    conficontraseña:'',
    telef:'',
    habili:'',
    hobby:'',
    cv:''

    }),
    
  ngOnInit() : void {
    this.usuarioForm = new FormGroup({
      'nombre': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'apellido': new FormControl(this.hero.alterEgo),
      'email': new FormControl(this.hero.power, Validators.required)
      'contraseña': new FormControl(this.hero.power, Validators.required)
      'conficontraseña': new FormControl(this.hero.power, Validators.required)
      'telef': new FormControl(this.hero.power, Validators.required)
      'habili': new FormControl(this.hero.power, Validators.required)
      'hobby': new FormControl(this.hero.power, Validators.required)
      'cv': new FormControl(this.hero.power, Validators.required)
    });
  }

}
