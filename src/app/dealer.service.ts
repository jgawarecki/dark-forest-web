import { DRAW, DISCARD, HAND } from "./mock-cards";
import { Injectable } from "@angular/core";
import { Card } from "./Card";
import { CardSplit } from "./CardSplit";
import { Observable, Subject, of, Observer } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DealerService {
  baseUrl = "https://localhost:44321/api/dealer";
  discardHandUrl = this.baseUrl + "/discardHand";
  drawHandUrl = this.baseUrl + "/drawHand";
  getSplitUrl = this.baseUrl + "/getsplit";
  drawCountUrl = this.baseUrl + "/draw?count=";
  discardCardUrl = this.baseUrl + "/play?cardId=";

  // discardPile = new Observable<Card[]>();
  // hand = new Observable<Card[]>();
  // drawPile = new Observable<Card[]>();

  SplitSream = new Subject<CardSplit>();

  constructor(private http: HttpClient) {
    this.SplitSream.next(new CardSplit());
  }

  drawHand() {
    console.log("draw hand");
    this.updateSplit(this.drawHandUrl);
  }

  draw(count: number) {
    console.log("draw " + count);
    this.updateSplit(this.drawCountUrl + count);
  }

  discardHand() {
    console.log("discard hand");
    this.updateSplit(this.discardHandUrl);
  }

  discardCard(cardId: string) {
    console.log("discard card: " + cardId);
    this.updateSplit(this.discardCardUrl + cardId);
  }

  updateSplit(requestUrl: string) {
    let updatedSplit: CardSplit = new CardSplit();
    this.http.get<CardSplit>(requestUrl).subscribe(
      (split: CardSplit) => (
        console.log(split),
        (updatedSplit.drawPile = (split as any).drawPile),
        (updatedSplit.hand = (split as any).hand),
        (updatedSplit.discardPile = (split as any).discardPile)
      ),
      // The 2nd callback handles errors.
      err => console.log(err),
      // The 3rd callback handles the "complete" event.
      () => console.log(updatedSplit)
    );
    this.SplitSream.next(updatedSplit);
  }
}
