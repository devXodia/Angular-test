import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['../assets/img/motto.jpg', '../assets/img/coffee.jpg', '../assets/img/gaming.jpg'];
  text = ["Mission? Becoming the best Developer out there!", "Hello World!", "Born to code!"];
  
  currentImage = 0;
  showImage = true; 
  currentText = 0;
  showText = true;



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
