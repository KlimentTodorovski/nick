import { Component,  OnInit } from '@angular/core';
import { Answers, Question } from 'src/app/interfaces/answers';

@Component({
  selector: 'app-math-addition',
  templateUrl: './math-addition.component.html',
  styleUrls: ['./math-addition.component.css']
})
export class MathAdditionComponent {

  questions: Question[] = [
    {
      question: '2+2?',
      options: ['4', '5', '6'],
      answer: '4'
    },
    {
      question: '3+4?',
      options: ['2', '12', '7'],
      answer: '7'
    },
    {
      question: '1+8?',
      options: ['1', '9', '5'],
      answer: '9'
    }
  ];

}
