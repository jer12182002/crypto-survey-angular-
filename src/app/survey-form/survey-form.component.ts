import { Component, OnInit } from "@angular/core";
import { CryptoService } from "../crypto-service.service";
@Component({
  selector: "app-survey-form",
  templateUrl: "./survey-form.component.html",
  styleUrls: ["./survey-form.component.css"]
})
export class SurveyFormComponent implements OnInit {
  cryptos;

  cryptoSurvey = {
    name: "jason",
    favoriteCrypto: "",
    comments: "comment test"
  };

  todayDate = new Date();
  constructor(public cryptoService: CryptoService) {}

  ngOnInit() {
    this.cryptoService.getCrypots().subscribe(data => {
      console.log(data);
      this.cryptos = data;
    });
  }

  sendForm() {
    console.log(this.cryptoSurvey);
  }
}
