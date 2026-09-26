import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {
  images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];
  index = 0;
  currentImage = signal(this.images[this.index]);
  intervalFunc?: ReturnType<typeof setInterval>;

  onStart() {
    this.intervalFunc = setInterval(() => {
      this.index = this.index < this.images.length - 1 ? this.index + 1 : 0;
      this.currentImage.set(this.images[this.index]);
    }, 3000);
  }

  onstop() {
    clearInterval(this.intervalFunc);
  }

  Prev() {
    this.index = this.index > 0 ? this.index - 1 : this.images.length - 1;
    this.currentImage.set(this.images[this.index]);
  }

  next() {
    this.index = this.index < this.images.length - 1 ? this.index + 1 : 0;
    this.currentImage.set(this.images[this.index]);
  }

  chooseDot(a: any) {
        this.currentImage.set(this.images[a]);

  }
}
