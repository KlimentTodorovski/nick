import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Answers, ImageType, Question } from 'src/app/interfaces/answers';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  currentIndex = 0;
  answers: Answers;
  score = 0;
  totalQuestions: number;
  quizOver = false;
  messageCorrect = false;
  messageError = false;
  @Input() questions: Question[];
  @Input() imageType: ImageType;
  image: string = null;
  isMath: boolean = false;

  constructor(private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.totalQuestions = this.questions.length - 1;
    if (this.imageType) {
      switch (this.imageType) {
        case ImageType.Emotions: {
          this.image = 'emotion';
          break;
        }
        case ImageType.Sport: {
          this.image = 'sport'
          break;
        }
      }
    }
  }

  goNext() {
    this.updateScore().then(() => this.currentIndex = this.currentIndex + 1)
    if (this.currentIndex === this.totalQuestions) {
      this.endQuiz();
    }
  }

  receiveAnswers(receivedAnswers) {
    this.answers = receivedAnswers;
    if (this.currentIndex === this.totalQuestions) {
      this.endQuiz();
    }
    this.goNext();
  }

  async updateScore() {
    if (this.answers.user_answer === this.answers.correct_answer) {
      this.toastr.success('Точен одговор.', 'Браво!');
      this.score++;
      this.messageCorrect = true;
      window.scroll(0, 0);
      await new Promise(resolve => setTimeout(resolve, 3000));
      this.messageCorrect = false;
    }
    else {
      const message: string = "Точниот одговор е: " + this.answers.correct_answer;
      this.toastr.error(message, ':(');
      this.messageError = true
      window.scroll(0, 0);
      await new Promise(resolve => setTimeout(resolve, 3000));
      this.messageError = false
    }
  }

  getTotalQuestions(totalQuestions: number) {
    this.totalQuestions = totalQuestions;
  }

  endQuiz() {
    this.quizOver = true;
  }

  restartQuiz() {
    this.quizOver = false;
    this.score = 0;
    this.currentIndex = 0;
  }
}
