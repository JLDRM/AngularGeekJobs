import { Component, OnInit } from '@angular/core';
import { Ajax } from './ajax';

import { GeekService } from '../geek.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  usuarios;
  nombre;
  apellidos;
  descripcion;

  constructor(private geekService: GeekService) {
  }

  ngOnInit() {
    this.getUsersFromMocky();
  }

  getUsersFromMocky(): void {
    this.geekService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
    this.nombre = this.usuarios.nombre;
  }

  getUsuarios() {

    Ajax('GET', 'http://www.mocky.io/v2/5a7190212f000035127762e5', (data) => {
      this.usuarios = data;
      console.log(data);
      this.nombre = this.usuarios.nombre;
      this.descripcion = this.usuarios.descripcion;
    });
  }

}
