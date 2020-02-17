import { Injectable } from "@angular/core";
import { Card } from "./models/Card";
import { CardSplit } from "./models/CardSplit";
import { Observable, Subject, of, Observer } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CombatService {
  baseUrl = "https://localhost:44321/api/battlefield";

  playCardUrl = this.baseUrl + "/play?cardId=";
  endTurnUrl = this.baseUrl + "/endTurn";
  refreshStateUrl = this.baseUrl + "/state";
  enterBattlefieldUrl = this.baseUrl + "/enterBattlefield";

  // discardPile = new Observable<Card[]>();
  // hand = new Observable<Card[]>();
  // drawPile = new Observable<Card[]>();

  SplitSream = new Subject<CardSplit>();

  constructor(private http: HttpClient) {
    this.SplitSream.next(new CardSplit());
  }

  playCard(cardId: string) {
    console.log("play card" + cardId);
    this.updateSplit(this.playCardUrl + cardId);
  }

  endTurn() {
    console.log("End Turn");
    this.updateSplit(this.refreshStateUrl + "?endTurn=true");
  }

  refreshState() {
    console.log("Refresh State");
    this.updateSplit(this.refreshStateUrl);
  }

  enterBattlefield() {
    console.log("enter battlefield");
    this.updateSplit(this.enterBattlefieldUrl);
  }

  updateSplit(requestUrl: string) {
    let updatedSplit: CardSplit = new CardSplit();
    this.http.get<CardSplit>(requestUrl).subscribe(
      (split: CardSplit) => (
        // console.log(split),
        (updatedSplit.drawPile = (split as any).drawPile),
        (updatedSplit.hand = (split as any).hand),
        (updatedSplit.discardPile = (split as any).discardPile)
      )
      // The 2nd callback handles errors.
      // err => console.log(err),
      // The 3rd callback handles the "complete" event.
      // () => console.log(updatedSplit)
    );
    this.SplitSream.next(updatedSplit);
  }
}
