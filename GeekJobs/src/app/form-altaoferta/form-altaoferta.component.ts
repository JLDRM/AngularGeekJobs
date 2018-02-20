import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Oferta } from '../../models/oferta';

@Component({
  selector: 'app-form-altaoferta',
  templateUrl: './form-altaoferta.component.html',
  styleUrls: ['./form-altaoferta.component.css']
})


export class FormAltaofertaComponent implements OnInit {

altaofertaForm: FormGroup;

oferta: Oferta = {
  position: "",
    jobDescription:"",
    training:"",
    location:"",
    experience:"",
    salary:"",
    remote:"",
    languajes:"",
    sskills:"",
    hskills:"",
}

  lettNum_oPattern: "^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$";
  lett_oPattern: "[a-zA-ZáéíóúÁÉÍÓÚ ]+";
  lettComma_oPattern: "[a-zA-ZáéíóúÁÉÍÓÚ, ]+";
  lettNumComma_oPattern: "[a-zA-Z0-9,_]*$";

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
createForm() {
  this.altaofertaForm = this.fb.group ({
  position:['', Validators.required],
  jobDescription:['', Validators.required],
  training:['', Validators.required],
  location:['', Validators.required],
  experience:['', Validators.required],
  salary:['', Validators.required],
  remote:['', Validators.required],
  languajes:['', Validators.required],
  sskills:['', Validators.required],
  hskills:['', Validators.required],
  
})
}

  ngOnInit(): void {

    this.altaofertaForm = new FormGroup({
      'position': new FormControl(this.oferta.position, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.lettNum_oPattern)
      ]),
      'jobDescription': new FormControl(this.oferta.jobDescription, [
        Validators.required,
        Validators.minLength(300),
        Validators.pattern(this.lettNumComma_oPattern)
      ]),
      'training': new FormControl(this.oferta.training, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.lett_oPattern)
      ]),
      'location': new FormControl(this.oferta.location, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.lett_oPattern)
      ]),
      'experience': new FormControl(this.oferta.experience, [
      
      ]),
      'salary': new FormControl(this.oferta.salary, [
    
      ]),
      'remote': new FormControl(this.oferta.remote, [
     
      ]),
      'languajes': new FormControl(this.oferta.languajes, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.lettComma_oPattern)
      ]),
      'sskills': new FormControl(this.oferta.sskills, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.lettComma_oPattern)
      ]),
      'hskills': new FormControl(this.oferta.hskills, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.lettNumComma_oPattern)
      ]),

    })
   
  }
  ngOnChanges() {
  }
}
