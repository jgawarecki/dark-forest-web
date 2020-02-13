import { DRAW, DISCARD, HAND } from "./mock-cards";
import { Injectable } from "@angular/core";
import { Card } from "./Card";
import { CardSplit } from "./CardSplit";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DealerService {
  discardHandUrl = "https://localhost:44321/api/dealer/discardHand";
  drawHandUrl = "https://localhost:44321/api/dealer/drawHand";
  getSplitUrl = "https://localhost:44321/api/dealer/draw";

  constructor(private http: HttpClient) {}
  // getDiscardPile(): Observable<Card[]> {
  //   return of(DISCARD);
  // }
  // getDrawPile(): Observable<Card[]> {
  //   return of(DRAW);
  // }
  // getHand(): Observable<Card[]> {
  //   return of(HAND);
  // }
  getSplit(): Observable<CardSplit> {
    let response = this.http.get<CardSplit>(this.getSplitUrl);
    console.log(response);
    return response;
    // let split: CardSplit;
    // this.http.get(this.url).subscribe(
    //   result => {
    //     split = result.json() as CardSplit;
    //   },
    //   error => console.error(error)
    // );
  }

  drawHand(): Observable<CardSplit> {
    let response = this.http.get<CardSplit>(this.drawHandUrl);
    console.log(response);
    return response;
  }

  discardHand(): Observable<CardSplit> {
    let response = this.http.get<CardSplit>(this.discardHandUrl);
    console.log(response);
    return response;
  }
}
