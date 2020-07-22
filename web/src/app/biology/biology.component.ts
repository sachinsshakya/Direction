import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biology',
  templateUrl: './biology.component.html',
  styleUrls: ['./biology.component.scss']
})
export class BiologyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

}
