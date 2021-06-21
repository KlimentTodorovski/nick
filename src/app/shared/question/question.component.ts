import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/interfaces/answers';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent  {

  @Input() questions: Question[];
  @Input() questionIndex: number;
  currentQuestion: string;
  currentOptions: string[];
  userAnswer: string;
  correctAnswer: string;
  @Input() image: string;
  index: number;
  numberOne = null;
  numberTwo = null;
  sign = null;

  ngOnInit(): void {
    this.index = -1;
  }

  ngOnChanges(): void {
    if (this.questionIndex != this.index) {
      this.index++;
      this.currentQuestion = this.questions[this.questionIndex].question;
      this.currentOptions = this.questions[this.questionIndex].options;
      document.getElementsByName("answer").forEach(a => a.setAttribute('checked', 'false'))
    }
    if (!this.image) {
      this.numberOne = this.currentQuestion.substring(0,1);
      this.sign = this.currentQuestion.substring(1,2);
      this.numberTwo = this.currentQuestion.substring(2,3);
    }
  }

  setUserAnswer(option: string) {
    this.userAnswer = option;
    this.correctAnswer = this.questions[this.questionIndex].answer;
    this.answers.emit(
      { user_answer: this.userAnswer, correct_answer: this.correctAnswer});
    this.currentOptions = []
  }

  @Output() answers = new EventEmitter<{ user_answer: string, correct_answer: string }>();

}

