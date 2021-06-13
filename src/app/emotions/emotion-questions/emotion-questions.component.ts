import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emotion-questions',
  templateUrl: './emotion-questions.component.html',
  styleUrls: ['./emotion-questions.component.css']
})
export class EmotionQuestionsComponent implements OnInit, DoCheck {

  questions: any[];
  @Input() questionIndex: number;
  currentQuestion: string;
  currentOptions: any;
  userAnswer: string;
  correctAnswer: string;

  ngOnInit(): void {
    this.questions = [
      {
        question: 'Како се чувствувам?',
        options: ['Тажно', 'Среќно', 'Изненадено'],
        answer: 'Среќно'
      },
      {
        question: 'Како се чувствувам?',
        options: ['Среќно', 'Весело', 'Тажно'],
        answer: 'Тажно'
      },
      {
        question: 'Како се чувствувам?',
        options: ['Среќно', 'Луто', 'Тажно'],
        answer: 'Луто'
      },
      {
        question: 'Како се чувствувам?',
        options: ['Изненадено', 'Разочарано', 'Луто'],
        answer: 'Изненадено'
      },
      {
        question: 'Како се чувствувам?',
        options: ['Изненадено', 'Исплашено', 'Среќно'],
        answer: 'Исплашено'
      },
      {
        question: 'Како се чувствувам?',
        options: ['Изненадено', 'Збунето', 'Среќно'],
        answer: 'Збунето'
      },
      {
        question: 'Како се чувствувам?',
        options: ['Изненадено', 'Исплашено', 'Разочарано'],
        answer: 'Разочарано'
      },
      {
        question: 'Како се чувствувам?',
        options: ['Возбудено', 'Исплашено', 'Разочарано'],
        answer: 'Возбудено'
      }, 
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
  @Output() answers =
    new EventEmitter<{ user_answer: string, correct_answer: string }>();

  @Output() totalQuestions = new EventEmitter<number>();
}
