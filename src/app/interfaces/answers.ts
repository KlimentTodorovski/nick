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
  Sport
}
