import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  myAudio;

  ngOnInit(): void {
  }

  play(value) {
    this.myAudio = new Audio(`assets/${value}.mp3`);
    this.myAudio.play()
  }

  stop(){
    this.myAudio.pause()
  }
}
