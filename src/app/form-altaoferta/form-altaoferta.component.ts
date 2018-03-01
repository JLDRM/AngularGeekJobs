import { Component, OnInit, Input, OnChanges, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Oferta } from '../../models/oferta';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-altaoferta',
  templateUrl: './form-altaoferta.component.html',
  styleUrls: ['./form-altaoferta.component.css']
})

export class FormAltaofertaComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('badFill') badFill: any;
  @ViewChild('goodFill') goodFill: any;

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

  constructor(private fb: FormBuilder, private modalService: BsModalService, private router: Router) {
    this.createForm();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
      this.openModal(this.goodFill);

    } else {
      this.openModal(this.badFill);
    }
  }
}
