import { Component } from '@angular/core';
import { Question } from 'src/app/interfaces/answers';

@Component({
  selector: 'app-math-subtraction',
  templateUrl: './math-subtraction.component.html',
  styleUrls: ['./math-subtraction.component.css']
})
export class MathSubtractionComponent {

  questions: Question[] = [
    {
      question: '2-2?',
      options: ['0', '5', '6'],
      answer: '0'
    },
    {
      question: '4-1?',
      options: ['2', '3', '7'],
      answer: '3'
    },
    {
      question: '9-5?',
      options: ['1', '9', '4'],
      answer: '4'
    }
  ];

}
