import { async } from "@angular/core/testing";
import { DISCARD } from "./../mock-cards";
import { DealerService } from "./../dealer.service";
import { Component, OnInit } from "@angular/core";
// import { DISCARD, HAND, DRAW } from "../mock-cards";
import { Card } from "../Card";
import { Observable, Subject, AsyncSubject } from "rxjs";
import { CardSplit } from "../CardSplit";

@Component({
  selector: "app-battlefield",
  templateUrl: "./battlefield.component.html",
  styleUrls: ["./battlefield.component.scss"]
})
export class BattlefieldComponent implements OnInit {
  battlefieldCards: CardSplit = new CardSplit();
  // discardPile: Card[] = this.battlefieldCards.discardPile;
  // hand: Card[] = this.battlefieldCards.hand;
  // drawPile: Card[] = this.battlefieldCards.drawPile;

  // cardSplit: CardSplit;
  showDiscardPile = false;
  showDrawPile = false;
  endingTurn = false;

  constructor(private dealerService: DealerService) {
    dealerService.SplitSream.subscribe(
      (split: CardSplit) => (this.battlefieldCards = split)
    );
  }

  async discardHand() {
    this.dealerService.discardHand();
  }

  async playCardFromHand(id: string) {
    this.dealerService.discardCard(id);
  }

  async drawHand() {
    this.dealerService.drawHand();
  }

  async endTurn() {
    this.endingTurn = true;
    await this.discardHand();
    await this.delay(1000);
    await this.drawHand();
    this.endingTurn = false;
  }
  ngOnInit() {
    this.drawHand();
  }
  ngAfterViewInit() {
    // this.updateCards();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }
}
