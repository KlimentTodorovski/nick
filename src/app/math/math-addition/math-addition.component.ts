import { Component,  OnInit } from '@angular/core';
import { Answers, ImageType, Question } from 'src/app/interfaces/answers';

@Component({
  selector: 'app-math-addition',
  templateUrl: './math-addition.component.html',
  styleUrls: ['./math-addition.component.css']
})
export class MathAdditionComponent {

  questions: Question[] = [
    {
      question: '1+1',
      options: ['2', '5', '6'],
      answer: '2'
    },
    {
      question: '2+2?',
      options: ['2', '4', '7'],
      answer: '4'
    },
    {
      question: '2+1?',
      options: ['1', '9', '3'],
      answer: '3'
    },
    {
      question: '4+4?',
      options: ['8', '9', '3'],
      answer: '8'
    },
    {
      question: '5+1?',
      options: ['1', '9', '6'],
      answer: '6'
    }
  ];

  imageType: ImageType = ImageType.Addition;
}
