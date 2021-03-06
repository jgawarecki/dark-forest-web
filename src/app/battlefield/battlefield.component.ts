import { BattleState } from "./../models/BattleState";
import { async } from "@angular/core/testing";
import { CombatService } from "../combat.service";
import { Component, OnInit } from "@angular/core";
// import { DISCARD, HAND, DRAW } from "../mock-cards";
import { Card } from "../models/Card";
import { Observable, Subject, AsyncSubject } from "rxjs";
import { CardSplit } from "../models/CardSplit";
import { Combatant } from "../models/Combatant";

@Component({
  selector: "app-battlefield",
  templateUrl: "./battlefield.component.html",
  styleUrls: ["./battlefield.component.scss"]
})
export class BattlefieldComponent implements OnInit {
  // battlefieldCards: CardSplit = new CardSplit();
  drawPile: Card[];
  hand: Card[];
  discardPile: Card[];
  players: Combatant[];
  foes: Combatant[];
  battleState: BattleState;

  // battlefieldCombatants: Combatant[]; // discardPile: Card[] = this.battlefieldCards.discardPile;

  // hand: Card[] = this.battlefieldCards.hand;
  // drawPile: Card[] = this.battlefieldCards.drawPile;

  // cardSplit: CardSplit;
  showDiscardPile = false;
  showDrawPile = false;
  endingTurn = false;

  constructor(private combatService: CombatService) {
    combatService.State.subscribe((state: BattleState) => {
      this.battleState = state;
      this.players = state.players;
      this.foes = state.foes;
      this.drawPile = state.cardSplit.drawPile;
      this.hand = state.cardSplit.hand;
      this.discardPile = state.cardSplit.discardPile;
      console.log(this.hand);
    });
  }

  async endTurn() {
    this.combatService.endTurn();
  }

  // async drawHand() {
  //   this.combatService.drawHand();
  // }

  // async endTurn() {
  //   this.endingTurn = true;
  //   await this.discardHand();
  //   await this.delay(1000);
  //   await this.drawHand();
  //   this.endingTurn = false;
  // }

  ngOnInit() {
    this.combatService.enterBattlefield();
  }
  ngAfterViewInit() {
    // this.updateCards();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }
}
