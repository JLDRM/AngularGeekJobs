import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormAltaofertaComponent } from '../form-altaoferta/form-altaoferta.component';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {
  empresaForm: FormGroup;

<<<<<<< HEAD
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.empresaForm = this.fb.group({
      nombre_emp: ['', Validators.required],
      apellido_emp: ['', Validators.required],
      email_emp: ['', Validators.required],
      password_emp: ['', Validators.required],
      cpassword_emp: ['', Validators.required],
      empresa_emp: ['', Validators.required],
      nif_emp: ['', Validators.required],
      telefono_emp: ['', Validators.required],
      stack_emp: [[], Validators.required],
      chk_emp: ['', Validators.required]
    })
  }
=======
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
>>>>>>> 3299ababc1e47c5709e74a688e0fd34906b913d2

  ngOnInit(): void {
    this.empresaForm = new FormGroup({
      'nombre_emp': new FormControl(this.empresa.nombre_emp,[
        Validators.required,
        Validators.minLength(3),

      ])
    });
  }
  ngOnChanges(){
    this.empresaForm.setValue({
      nombre_emp: this.nombre_emp,
      apellido_emp: this.nombre_emp,
      email_emp: ['', Validators.required],
      password_emp: ['', Validators.required],
      cpassword_emp: ['', Validators.required],
      empresa_emp: ['', Validators.required],
      nif_emp: ['', Validators.required],
      telefono_emp: ['', Validators.required],
      stack_emp: [[], Validators.required],
      chk_emp: ['', Validators.required]
    })
  }

}
