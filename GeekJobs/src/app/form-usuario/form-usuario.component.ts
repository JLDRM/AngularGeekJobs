import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  usuarioForm = new FormGroup ({
    nombre: new FormControl(),
    apellido: new FormControl(),
    email: new FormControl(),
    contraseña: new FormControl(),
    conficontraseña: new FormControl(),
    telef: new FormControl(),
    habili: new FormControl(),
    hobby: new FormControl(),
    cv: new FormControl()

  });

  constructor() { }

  ngOnInit() {
  }

}
