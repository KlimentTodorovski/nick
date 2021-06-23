import { Component, OnInit } from '@angular/core';
import { Letter } from 'src/app/interfaces/answers.js';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {

  alphabet: Letter[] = [
    { letter: "А", lower: "а", upper: "А", words: [ "Авион", "Авокадо", "Албум" ], position: 0 },
    { letter: "Б", lower: "б", upper: "Б", words: [ "Банана", "Буква", "Брод" ], position: 1 },
    { letter: "В", lower: "в", upper: "В", words: [ "Воз", "Вода", "Вулкан" ], position: 2 },
    { letter: "Г", lower: "г", upper: "Г", words: [ "Голф", "Град", "Гума" ], position: 3 },
    { letter: "Д", lower: "д", upper: "Д", words: [ "Доктор", "Дрво", "Долго" ], position: 4 },
    { letter: "Ѓ", lower: "ѓ", upper: "Ѓ", words: [ "ѓердан", "ѓеврек", "ѓезве" ], position: 5 },
    { letter: "Е", lower: "е", upper: "Е", words: [ "Еж", "Елка", "Елен" ], position: 6 },
    { letter: "Ж", lower: "ж", upper: "Ж", words: [ "Желка", "Жаба", "Жолта" ], position: 7 },
    { letter: "З", lower: "з", upper: "З", words: [ "Змија", "Зебра", "Зурла" ], position: 8 },
    { letter: "Ѕ", lower: "ѕ", upper: "Ѕ", words: [ "Ѕидар", "Ѕвоно", "Ѕид" ], position: 9 },
    { letter: "И", lower: "и", upper: "И", words: [ "Игла", "Ирвас", "Игло" ], position: 10 },
    { letter: "Ј", lower: "ј", upper: "Ј", words: [ "Јагода", "Јаболко", "Јорган" ], position: 11 },
    { letter: "К", lower: "к", upper: "К", words: [ "Камен", "Круна", "Куќа" ], position: 12 },
    { letter: "Л", lower: "л", upper: "Л", words: [ "Леб", "Лав", "Лимон" ], position: 13 },
    { letter: "Љ", lower: "љ", upper: "Љ", words: [ "Љубов", "Љубичица", "Љубезен" ], position: 14 },
    { letter: "М", lower: "м", upper: "М", words: [ "Мечка", "Мајмун", "Манго" ], position: 15 },
    { letter: "Н", lower: "н", upper: "Н", words: [ "Носорог", "Надеж", "Нива" ], position: 16 },
    { letter: "Њ", lower: "њ", upper: "Њ", words: [ "коЊ", "дуЊа", "сиреЊе" ], position: 17 },
    { letter: "О", lower: "о", upper: "О", words: [ "Опашка", "Овен", "Овошје" ], position: 18 },
    { letter: "П", lower: "п", upper: "П", words: [ "Пица", "Подарок", "Петел" ], position: 19 },
    { letter: "Р", lower: "р", upper: "Р", words: [ "Река", "Рамо", "Риба" ], position: 20 },
    { letter: "С", lower: "с", upper: "С", words: [ "Слон", "Слика", "Слива" ], position: 21 },
    { letter: "Т", lower: "т", upper: "Т", words: [ "Торба", "Тегла", "Трактор" ], position: 22 },
    { letter: "Ќ", lower: "ќ", upper: "Ќ", words: [ "Ќумбе", "Ќебе", "Ќесе" ], position: 23 },
    { letter: "У", lower: "у", upper: "У", words: [ "Украс", "Уво", "Убавина" ], position: 24 },
    { letter: "Ф", lower: "ф", upper: "Ф", words: [ "Фурна", "Флејта", "Филм" ], position: 25 },
    { letter: "Х", lower: "х", upper: "Х", words: [ "Хор", "Хартија", "Храна" ], position: 26 },
    { letter: "Ц", lower: "ц", upper: "Ц", words: [ "Црв", "Црвена", "Цвет" ], position: 27 },
    { letter: "Ч", lower: "ч", upper: "Ч", words: [ "Чизми", "Чекан", "Чад" ], position: 28 },
    { letter: "Џ", lower: "џ", upper: "Џ", words: [ "Џем", "Џип", "Џин" ], position: 29 },
    { letter: "Ш", lower: "ш", upper: "Ш", words: [ "Шега", "Шајка", "Штрк" ], position: 30 }
  ]

  currentLetter: Letter;
  currentLetterIndex: number;

  constructor() { }

  ngOnInit(): void {
    this.currentLetterIndex = 0;
    this.currentLetter = this.alphabet[this.currentLetterIndex];
  }

  public next(): void {
    if (this.currentLetter.letter !== "Ш") {
      this.currentLetterIndex++;
      this.currentLetter = this.alphabet[this.currentLetterIndex];
    }
  }

  public previous(): void {
    if (this.currentLetter.letter !== "A") {
      this.currentLetterIndex--;
      this.currentLetter = this.alphabet[this.currentLetterIndex];
    }
  }

  public goTo(letter: number): void {
    if (this.currentLetterIndex !== letter) {
      this.currentLetterIndex = letter;
      this.currentLetter = this.alphabet[this.currentLetterIndex];
    }
  }
}
