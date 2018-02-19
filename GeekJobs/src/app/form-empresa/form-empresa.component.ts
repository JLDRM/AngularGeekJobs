import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {

  constructor(
    public nombre: string,
    public apellido: string,
    public email: string,
    public contraseña: string,
    public empresa: string,
    public nif: string,
    public telefono: string,
    public stack: Array<any>
  ) { }

  ngOnInit() {
  }

}
