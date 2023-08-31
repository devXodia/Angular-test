import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['../assets/img/motto.jpg', '../assets/img/coffee.jpg', '../assets/img/gaming.jpg'];
  text = ["Mission? Becoming the best Developer out there!", "Hello World!", "Born to code!"];
  
  currentImage = 0;
  showImage = true; 
  




  ngOnInit(){
    this.updateImage();
    
  }


  updateImage() {
    setInterval(() =>{
      this.currentImage++
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout( () => {
        this.showImage = true;
      }, 5);
    }, 8000)
  }
}
