import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { SurveyFormComponent } from "./survey-form/survey-form.component";
import { CryptoService } from "./crypto-service.service";
import { SubmittedFormComponent } from "./submitted-form/submitted-form.component";
import { PipeinfoPipe } from './pipeinfo.pipe';

const routes = [
  { path: "", component: SurveyFormComponent },
  { path: "submitted", component: SubmittedFormComponent }
];

@NgModule({
  declarations: [AppComponent, SurveyFormComponent, SubmittedFormComponent, PipeinfoPipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
