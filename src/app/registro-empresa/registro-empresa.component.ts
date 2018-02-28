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
    $('#scroll').click(function (e) {
      e.preventDefault();		//evitar el eventos del enlace normal
      var strAncla = $(this).attr('href'); //id del ancla
      $('body,html').stop(true, true).animate({
        scrollTop: $(strAncla).offset().top - 60
      }, 1000);

    });
  }
}