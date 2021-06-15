import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-math-addition-questions',
  templateUrl: './math-addition-questions.component.html',
  styleUrls: ['./math-addition-questions.component.css']
})

export class MathAdditionQuestionsComponent implements OnInit {

  @Input() questionIndex: number;
  @Output() answers = new EventEmitter<{ user_answer: string, correct_answer: string }>();
  @Output() totalQuestions = new EventEmitter<number>();
  questions: any[];
  currentQuestion: string;
  currentOptions: any;
  userAnswer: string;
  correctAnswer: string;

  constructor() { }

  ngOnInit(): void {
    this.questions = [
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
    this.totalQuestions.emit(this.questions.length);
  }

  ngDoCheck(): void {
    this.currentQuestion = this.questions[this.questionIndex].question;
    this.currentOptions = this.questions[this.questionIndex].options;
  }

  setUserAnswer(option: string) {
    this.userAnswer = option;
    this.correctAnswer = this.questions[this.questionIndex].answer;
    this.answers.emit(
      { user_answer: this.userAnswer, correct_answer: this.correctAnswer });
  }

}
