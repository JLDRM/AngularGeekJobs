import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#scroll').click(function (e) {
      e.preventDefault();		//evitar el eventos del enlace normal
      var strAncla = $(this).attr('href'); //id del ancla
      $('body,html').stop(true, true).animate({
        scrollTop: $(strAncla).offset().top - 60
      }, 1000);

    });
  }

}