import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-registro-oferta',
  templateUrl: './registro-oferta.component.html',
  styleUrls: ['./registro-oferta.component.css']
})
export class RegistroOfertaComponent implements OnInit {

  constructor() { }

 
  ngOnInit() {
    $('#vamoss').click(function (e) {
      e.preventDefault();		//evitar el eventos del enlace normal
      var strAncla = $(this).attr('href'); //id del ancla
      $('body,html').stop(true, true).animate({
        scrollTop: $(strAncla).offset().top -100
      }, 1000);

    });
  }

}
