import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    $('#scroll').click(function (e) {
      e.preventDefault();		//evitar el eventos del enlace normal
      var strAncla = $(this).attr('href'); //id del ancla
      $('body,html').stop(true, true).animate({
        scrollTop: $(strAncla).offset().top - 60
=======
    $('#btn').click(function (e) {
      e.preventDefault();		//evitar el eventos del enlace normal
      var strAncla = $(this).attr('href'); //id del ancla
      $('body,html').stop(true, true).animate({
        scrollTop: $(strAncla).offset().top -60
>>>>>>> 20962901c9d375c2666f61e064d9c30f1c647dd5
      }, 1000);

    });
  }

}