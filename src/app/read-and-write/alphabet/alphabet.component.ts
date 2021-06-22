import { Component, OnInit } from '@angular/core';
import { Letter } from 'src/app/interfaces/answers.js';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {

  alphabet: Letter[] = [
    { letter: "А", lower: "а", upper: "А", words: [ "Авион", "Авокадо", "Албум" ] },
    { letter: "Б", lower: "б", upper: "Б", words: [ "Банана", "Буква", "Брод" ] },
    { letter: "В", lower: "в", upper: "В", words: [ "Воз", "Вода", "Вулкан" ] },
    { letter: "Г", lower: "г", upper: "Г", words: [ "Голф", "Град", "Гума" ] },
    { letter: "Д", lower: "д", upper: "Д", words: [ "Доктор", "Дрво", "Долго" ] },
    { letter: "Ѓ", lower: "ѓ", upper: "Ѓ", words: [ "ѓердан", "ѓеврек", "ѓезве" ] },
    { letter: "Е", lower: "е", upper: "Е", words: [ "Еж", "Елка", "Елен" ] },
    { letter: "Ж", lower: "ж", upper: "Ж", words: [ "Желка", "Жаба", "Жолта" ] },
    { letter: "З", lower: "з", upper: "З", words: [ "Змија", "Зебра", "Зурла" ] },
    { letter: "Ѕ", lower: "ѕ", upper: "Ѕ", words: [ "Ѕидар", "Ѕвоно", "Ѕид" ] },
    { letter: "И", lower: "и", upper: "И", words: [ "Игла", "Ирвас", "Игло" ] },
    { letter: "Ј", lower: "ј", upper: "Ј", words: [ "Јагода", "Јаболко", "Јорган" ] },
    { letter: "К", lower: "к", upper: "К", words: [ "Камен", "Круна", "Куќа" ] },
    { letter: "Л", lower: "л", upper: "Л", words: [ "Леб", "Лав", "Лимон" ] },
    { letter: "Љ", lower: "љ", upper: "Љ", words: [ "Љубов", "Љубичица", "Љубезен" ] },
    { letter: "М", lower: "м", upper: "М", words: [ "Мечка", "Мајмун", "Манго" ] },
    { letter: "Н", lower: "н", upper: "Н", words: [ "Носорог", "Надеж", "Нива" ] },
    { letter: "Њ", lower: "њ", upper: "Њ", words: [ "коЊ", "дуЊа", "сиреЊе" ] },
    { letter: "О", lower: "о", upper: "О", words: [ "Опашка", "Овен", "Овошје" ] },
    { letter: "П", lower: "п", upper: "П", words: [ "Пица", "Подарок", "Петел" ] },
    { letter: "Р", lower: "р", upper: "Р", words: [ "Река", "Рамо", "Риба" ] },
    { letter: "С", lower: "с", upper: "С", words: [ "Слон", "Слика", "Слива" ] },
    { letter: "Т", lower: "т", upper: "Т", words: [ "Торба", "Тегла", "Трактор" ] },
    { letter: "Ќ", lower: "ќ", upper: "Ќ", words: [ "Ќумбе", "Ќебе", "Ќесе" ] },
    { letter: "У", lower: "у", upper: "У", words: [ "Украс", "Уво", "Убавина" ] },
    { letter: "Ф", lower: "ф", upper: "Ф", words: [ "Фурна", "Флејта", "Филм" ] },
    { letter: "Х", lower: "х", upper: "Х", words: [ "Хор", "Хартија", "Храна" ] },
    { letter: "Ц", lower: "ц", upper: "Ц", words: [ "Црв", "Црвена", "Цвет" ] },
    { letter: "Ч", lower: "ч", upper: "Ч", words: [ "Чизми", "Чекан", "Чад" ] },
    { letter: "Џ", lower: "џ", upper: "Џ", words: [ "Џем", "Џип", "Џин" ] },
    { letter: "Ш", lower: "ш", upper: "Ш", words: [ "Шега", "Шајка", "Штрк" ] }
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
}
