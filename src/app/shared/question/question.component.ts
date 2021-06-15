import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/interfaces/answers';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, DoCheck {

  @Input() questions: Question[];
  @Input() questionIndex: number;
  currentQuestion: string;
  currentOptions: any;
  userAnswer: string;
  correctAnswer: string;
  @Input() image: string;

  ngOnInit(): void {
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

  @Output() answers = new EventEmitter<{ user_answer: string, correct_answer: string }>();

}

