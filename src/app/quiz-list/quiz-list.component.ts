import { Component, OnInit } from '@angular/core';
import { QuisDataService } from '../quis-data.service'

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  getData: any;
  quizs: any = {};
  selectedAnswer: boolean;
  quizCounter: number = 1;
  scoringCounter: number = 0;
  showScoring: boolean = false;
  dataLength: number = 0;
    
  constructor(private QuisDataService: QuisDataService) { }

  ngOnInit() {

    this.QuisDataService.getQuizData()
    .subscribe(response =>{
      this.quizs = response;
      this.dataLength = this.quizs.Quiz.length;
    })

  }


  checksCorrectAnswer(quiz, correctAnswer){
    let index = this.quizs['Quiz'].indexOf(quiz)
    this.quizs['Quiz'][index].checksCorrectAnswer = correctAnswer
  }

  questionCounter(num){
    this.quizCounter += num
  }

  quizDone(){
    for(let i in this.quizs['Quiz']){
      if(this.quizs['Quiz'][i].checksCorrectAnswer === true){
        this.scoringCounter++
      }
    }
    this.scoringCounter *= 20;
    this.showScoring = true;
  }
}
