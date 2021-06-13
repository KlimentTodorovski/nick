import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Answers } from '../interfaces/answers';


@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent implements OnInit {

  currentIndex = 0;
  answers: Answers;
  score = 0;
  totalQuestions: number;
  quizOver = false;
  messageCorrect = false;
  messageError = false;

  ngOnInit(): void {
  }



  goNext() {
    this.updateScore().then(() => this.currentIndex++)
    if (this.currentIndex === this.totalQuestions) {
      this.endQuiz();
    }
  }

  receiveAnswers(receivedAnswers) {
    this.answers = receivedAnswers;
  }

  async updateScore() {
    if (this.answers.user_answer === this.answers.correct_answer) {
      this.score++;
      this.messageCorrect = true
      window.scroll(0, 0);
      await new Promise(resolve => setTimeout(resolve, 3000));
      this.messageCorrect = false
    }
    else {
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
