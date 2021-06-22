import { Component, OnInit } from '@angular/core';
import { ImageType, Question } from '../interfaces/answers';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  questions: Question[] = [
    {
      question: 'Кој спорт го игра детето на сликата?',
      options: ['Фудбал', 'Кошарка', 'Одбојка'],
      answer: 'Фудбал'
    },
    {
      question: 'Кој спорт го игра детето на сликата?',
      options: ['Ватерполо', 'Кошарка', 'Рагби'],
      answer: 'Кошарка'
    },
    {
      question: 'Кој спорт го игра детето на сликата?',
      options: ['Одбојка', 'Ватерполо', 'Тенис'],
      answer: 'Тенис'
    },
    {
      question: 'Кој спорт го игра детето на сликата?',
      options: ['Хокеј', 'Тенис', 'Бејзбол'],
      answer: 'Хокеј'
    },
    {
      question: 'Кој спорт го игра детето на сликата?',
      options: ['Бејзббол', 'Ракомет', 'Одбојка'],
      answer: 'Ракомет'
    },
    {
      question: 'Кој спорт го игра детето на сликата?',
      options: ['Рагби', 'Фудбал', 'Одбојка'],
      answer: 'Одбојка'
    },
    {
      question: 'Кој спорт го игра детето на сликата?',
      options: ['Бејзбол', 'Кошарка', 'Ракомет'],
      answer: 'Бејзбол'
    },
    {
      question: 'Кој спорт го игра детето на сликата?',
      options: ['Хокеј', 'Ватерполо', 'Тенис'],
      answer: 'Ватерполо'
    },
    {
      question: 'Кој спорт го игра детето на сликата?',
      options: ['Одбојка', 'Рагби', 'Фудбал'],
      answer: 'Рагби'
    }
  ];

  imageType: ImageType = ImageType.Sport;

  constructor() { }

  ngOnInit(): void {
  }

}
