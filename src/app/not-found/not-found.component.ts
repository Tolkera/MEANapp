import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    let parallaxElem = document.querySelectorAll('.js-parallax');


    let settings = {
      method: 'mouse',
      mouseSpeed: 50
    };

    window.onmousemove = function (e) {
      var pageX = e.pageX;
      var pageY = e.pageY;


      parallaxElem.forEach((elem)=>{
        elem.style.left = pageX/settings.mouseSpeed + 'px';
        elem.style.top = pageY/settings.mouseSpeed + 'px';
       // console.log(pageX/settings.mouseSpeed)
      });
    }

  }
}
