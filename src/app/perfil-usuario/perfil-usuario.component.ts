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
    let idUsuario = localStorage.getItem('idUsuario');
    // id de prueba: '5a9580dc8d19b8394d3273ca'
    this.geekService.getUsuarioFromAPI('5a96a92bfa2e4724fcb709ab')
      .then(output => this.usuario = output)
      .catch(error => console.log(error));
  }
}
