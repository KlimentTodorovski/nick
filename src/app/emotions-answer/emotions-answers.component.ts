import { Component, OnInit } from '@angular/core';
import { ImageType, Question } from '../interfaces/answers';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-emotions-answers',
  templateUrl: './emotions-answers.component.html',
  styleUrls: ['./emotions-answers.component.css']
})
export class EmotionsAnswersComponent implements OnInit {

  constructor() { }

  check = faCoffee;
  questionIndex = -1;
  currentQuestion;
  currentOptions;
  correct;
  answered;
  questions = [
    {
      question: 'Како се чувствувам?',
      options: ['Тажно', 'Среќно', 'Изненадено'],
      correctAnswer: 'Среќно',
      answer: 'Среќно',
    },
    {
      question: 'Како се чувствувам?',
      options: ['Среќно', 'Весело', 'Тажно'],
      correctAnswer: 'Тажно',
      answer: 'Тажно',

    },
    {
      question: 'Како се чувствувам?',
      options: ['Среќно', 'Луто', 'Тажно'],
      correctAnswer: 'Луто',
      answer: 'Луто'
    },
    {
      question: 'Како се чувствувам?',
      options: ['Изненадено', 'Разочарано', 'Луто'],
      correctAnswer: 'Изненадено',
      answer: 'Изненадено'
    },
    {
      question: 'Како се чувствувам?',
      options: ['Изненадено', 'Исплашено', 'Среќно'],
      answer: 'Исплашено',
      correctAnswer: 'Исплашено'
    },
    {
      question: 'Како се чувствувам?',
      options: ['Изненадено', 'Збунето', 'Среќно'],
      answer: 'Збунето',
      correctAnswer: 'Збунето'
    },
    {
      question: 'Како се чувствувам?',
      options: ['Изненадено', 'Исплашено', 'Разочарано'],
      answer: 'Разочарано',
      correctAnswer: 'Разочарано'
    },
    {
      question: 'Како се чувствувам?',
      options: ['Возбудено', 'Исплашено', 'Разочарано'],
      answer: 'Возбудено',
      correctAnswer: 'Исплашено'
    },
  ];

  image: ImageType = ImageType.Emotions;

  ngOnInit(): void {
    this.updateQuestion()
  }

  updateQuestion(){
    this.questionIndex++;
    this.currentQuestion = this.questions[this.questionIndex].question
    this.currentOptions = this.questions[this.questionIndex].options
    this.correct = this.questions[this.questionIndex].correctAnswer
    this.answered = this.questions[this.questionIndex].answer
  }

}
