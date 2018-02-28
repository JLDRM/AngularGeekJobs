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
    jobDescription: "",
    training: "",
    location: "",
    experience: "",
    salary: "",
    remote: "",
    languajes: "",
    sskills: "",
    hskills: "",
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.altaofertaForm = this.fb.group({
      position: ['', Validators.required],
      jobDescription: ['', Validators.required],
      training: ['', Validators.required],
      location: ['', Validators.required],
      experience: ['', Validators.required],
      salary: ['', Validators.required],
      remote: ['', Validators.required],
      languajes: ['', Validators.required],
      sskills: ['', Validators.required],
      hskills: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    this.altaofertaForm = new FormGroup({
      'position': new FormControl(this.oferta.position, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$")
      ]),
      'jobDescription': new FormControl(this.oferta.jobDescription, [
        Validators.required,
        Validators.minLength(300),
      ]),
      'training': new FormControl(this.oferta.training, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("[a-zA-ZáéíóúÁÉÍÓÚ ]+")
      ]),
      'location': new FormControl(this.oferta.location, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("[a-zA-ZáéíóúÁÉÍÓÚ ]+")
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
        Validators.pattern("^[A-Za-z,\. ]{3,50}$")
      ]),
      'sskills': new FormControl(this.oferta.sskills, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("[a-zA-ZáéíóúÁÉÍÓÚ ]+")
      ]),
      'hskills': new FormControl(this.oferta.hskills, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("^[A-Za-z0-9,\. ]{3,50}$")
      ]),
    })
  }
  ngOnChanges() {
  }

  onSubmit() {
    if (this.altaofertaForm.valid) {
      console.log('La oferta se ha publicado correctamente');
    } else {
      alert('Lo sentimos, se ha producido un error')
    }
  }
}
