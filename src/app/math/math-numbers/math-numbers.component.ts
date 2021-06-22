import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/answers';

@Component({
  selector: 'app-math-numbers',
  templateUrl: './math-numbers.component.html',
  styleUrls: ['./math-numbers.component.css']
})
export class MathNumbersComponent implements OnInit {



  ngOnInit(): void {
  
  }

 onClick(num){
  console.log('here')
  var myAudio = new Audio(`assets/numbers/${num}.mp3`);
  myAudio.play();
  myAudio.autoplay;
 }

}
