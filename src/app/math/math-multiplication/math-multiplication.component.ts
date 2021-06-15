import { Component } from '@angular/core';
import { Question } from 'src/app/interfaces/answers';

@Component({
  selector: 'app-math-multiplication',
  templateUrl: './math-multiplication.component.html',
  styleUrls: ['./math-multiplication.component.css']
})
export class MathMultiplicationComponent {

  questions: Question[] = [
    {
      question: '2*2?',
      options: ['4', '5', '6'],
      answer: '4'
    },
    {
      question: '4*1?',
      options: ['2', '4', '7'],
      answer: '4'
    },
    {
      question: '5*2?',
      options: ['1', '9', '10'],
      answer: '10'
    }
  ];

}
