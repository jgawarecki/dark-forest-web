import { Injectable } from "@angular/core";
import { Card } from "./models/Card";
import { CardSplit } from "./models/CardSplit";
import { BattleState } from "./models/BattleState";
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
  enterBattlefieldUrl = this.baseUrl + "/enter";

  // discardPile = new Observable<Card[]>();
  // hand = new Observable<Card[]>();
  // drawPile = new Observable<Card[]>();

  // SplitSream = new Subject<CardSplit>();
  State = new Subject<BattleState>();

  constructor(private http: HttpClient) {
    // this.SplitSream.next(new CardSplit());
    this.State.next(new BattleState());
  }

  playCard(cardId: string) {
    console.log("play card" + cardId);
    this.updateState(this.playCardUrl + cardId);
  }

  endTurn() {
    console.log("End Turn");
    this.updateState(this.refreshStateUrl + "?endTurn=true");
  }

  refreshState() {
    console.log("Refresh State");
    this.updateState(this.refreshStateUrl);
  }

  enterBattlefield() {
    console.log("enter battlefield");
    this.updateState(this.enterBattlefieldUrl);
  }

  // updateSplit(requestUrl: string) {
  //   let updatedSplit: CardSplit = new CardSplit();
  //   this.http.get<CardSplit>(requestUrl).subscribe(
  //     (split: CardSplit) => (
  //       // console.log(split),
  //       (updatedSplit.drawPile = (split as any).drawPile),
  //       (updatedSplit.hand = (split as any).hand),
  //       (updatedSplit.discardPile = (split as any).discardPile)
  //     )
  //     // The 2nd callback handles errors.
  //     // err => console.log(err),
  //     // The 3rd callback handles the "complete" event.
  //     // () => console.log(updatedSplit)
  //   );
  //   this.SplitSream.next(updatedSplit);
  // }

  updateState(requestUrl: string) {
    console.log("now sending url: " + requestUrl);
    let updatedState: BattleState = new BattleState();
    this.http.get<BattleState>(requestUrl).subscribe(
      (state: BattleState) => {
        console.log(state);
        updatedState.cardSplit = (state as any).cardSplit;
        updatedState.foes = (state as any).foes;
        updatedState.players = (state as any).players;
        this.State.next(updatedState);
        console.log(updatedState);
      }
      // The 2nd callback handles errors.
      // err => console.log(err),
      // The 3rd callback handles the "complete" event.
      // () => console.log(updatedSplit)
    );
    //this.State.next(updatedState);

    // this.SplitSream.next(updatedState.cardSplit);
  }
}
