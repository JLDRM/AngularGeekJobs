import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-geek',
  templateUrl: './home-geek.component.html',
  styleUrls: ['./home-geek.component.css']
})
export class HomeGeekComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    $('#scroll').click(function(e){				
      e.preventDefault();		//evitar el eventos del enlace normal
      var strAncla=$(this).attr('href'); //id del ancla
        $('body,html').stop(true,true).animate({				
          scrollTop: $(strAncla).offset().top
        },1000);
=======
    // $('button').click(function(e){				
    //   e.preventDefault();		//evitar el eventos del enlace normal
    //   var strAncla=$(this).attr('href'); //id del ancla
    //     $('body,html').stop(true,true).animate({				
    //       scrollTop: $(strAncla).offset().top
    //     },1000);
>>>>>>> 0013497d9128f2c03692fabae3b31f391dca3cf6
      
    // });
  }

}
