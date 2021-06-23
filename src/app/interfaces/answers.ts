export interface Answers {
    user_answer: string,
    correct_answer: string
}

export interface Question {
  question: string,
  options: string[],
  answer: string
}

export enum ImageType {
  Emotions = 1,
  Sport,
  Addition
}

export interface Letter {
  letter: string,
  lower: string,
  upper: string,
  words: string[],
  position: number
}
