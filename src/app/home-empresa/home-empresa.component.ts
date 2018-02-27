import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.css']
})
export class HomeEmpresaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('button').click(function(e){				
      e.preventDefault();		//evitar el eventos del enlace normal
      var strAncla=$(this).attr('href'); //id del ancla
        $('body,html').stop(true,true).animate({				
          scrollTop: $(strAncla).offset().top
        },1000);
      
    });
  }
}