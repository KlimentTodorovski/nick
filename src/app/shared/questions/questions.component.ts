import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.totalQuestions = this.questions.length;
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
