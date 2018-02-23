import { Component, OnInit } from '@angular/core';
import { GeekService } from '../servicios/geek.service';
import { Geek } from '../../models/geek';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  usuario;
  fotoPerfil;
  nombre;
  apellidos;
  descripcion;
  habilidades;
  habilidadesPrincipales;
  portafolio;
  experiencia;
  formacion;

  constructor(private geekService: GeekService) {
    this.usuario = '';
    this.fotoPerfil = '/assets/img/persona.png';
    this.nombre = 'Superman';
    this.apellidos = '';
    this.descripcion = '';
    this.habilidades = '';
    this.habilidadesPrincipales = '';
    this.portafolio = '';
    this.experiencia = '';
    this.formacion = '';
  }

  ngOnInit() {
    this.geekService.getUsuarioFromMocky()
      .then(output => this.usuario = output)
      .catch(error => console.log(error));
  }
}
