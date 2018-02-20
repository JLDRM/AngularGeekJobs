import { Component, OnInit } from '@angular/core';
import { GeekService } from '../geek.service';
import { Geek } from '../../models/geek';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  usuario;
  fotoPerfil = 'http://discmdgroup.com/wp-content/uploads/2012/06/Lolo-Jones-profile.jpg';
  nombre;
  apellidos;
  descripcion;
  habilidades;
  portafolio;
  experiencia;
  formacion;

  constructor(private geekService: GeekService) {
    this.geekService.getUsuarioFromMocky()
      .then(output => this.usuario = output)
      .catch(error => console.log(error));
  }

  ngOnInit() { }
}
