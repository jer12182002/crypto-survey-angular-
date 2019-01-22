import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class CryptoService {
  constructor(public http: HttpClient) {}

  getCrypots() {
    //this is to get obj.json from the coin market website
    return this.http.get("https://api.coinmarketcap.com/v1/ticker/");
  }
}
