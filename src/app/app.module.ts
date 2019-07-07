import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuisDataService } from './quis-data.service';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    QuisDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
