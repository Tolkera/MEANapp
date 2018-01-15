import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  ngOnInit() {

     let parallaxElem = Array.from(document.querySelectorAll('.js-parallax'));

    let settings = {
      method: 'mouse',
      mouseSpeed: 30
    };

    window.onmousemove = function (e) {
      var pageX = e.pageX;
      var pageY = e.pageY;
      parallaxElem.forEach((elem:HTMLElement)=>{
        elem.style.left = pageX/settings.mouseSpeed + 'px';
        elem.style.top = pageY/(settings.mouseSpeed) + 'px';
      });
    }
  }
}
