import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
    $(window).scroll(function () {
      if ($("#menu").offset().top > 56) {
        $("#menu").addClass("navbarscroll");
      } else {
        $("#menu").removeClass("navbarscroll");
      }
    });

    $(window).scroll(function () {
      if ($("#menuhome").offset().top > 56) {
        $("#menuhome").addClass("dropdown-scroll");
      } else {
        $("#menuhome").removeClass("dropdown-scroll");
      }
    });
  }

}
