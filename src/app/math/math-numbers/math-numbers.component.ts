import { Component } from '@angular/core';
import { Question } from 'src/app/interfaces/answers';

@Component({
  selector: 'app-math-numbers',
  templateUrl: './math-numbers.component.html',
  styleUrls: ['./math-numbers.component.css']
})
export class MathNumbersComponent {

  questions: Question[] = [
    {
      question: 'Колку букви "e" имаме - е, е, е?',
      options: ['3', '5', '6'],
      answer: '3'
    },
    {
      question: 'Колку букви "e" имаме - е, е?',
      options: ['4', '2', '7'],
      answer: '2'
    },
    {
      question: 'Колку букви "e" имаме - е, е, е, е, е, е?',
      options: ['1', '9', '6'],
      answer: '6'
    }
  ];

}
