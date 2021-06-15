import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Answers, ImageType, Question } from '../interfaces/answers';


@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent {

  questions: Question[] = [
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

  imageType: ImageType = ImageType.Emotions;

}
