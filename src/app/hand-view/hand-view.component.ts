import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CombatService } from "../combat.service";
import { Card } from "../models/Card";
import { CardSplit } from "../models/CardSplit";
// import { EventEmitter } from "protractor";

@Component({
  selector: "app-hand-view",
  templateUrl: "./hand-view.component.html",
  styleUrls: ["./hand-view.component.scss"]
})
export class HandViewComponent implements OnInit {
  // @Input() hand: Card[];
  cards: CardSplit = new CardSplit();
  hand: Card[];
  // @Output() playCardEvent = new EventEmitter<string>();
  // @Output() messageEvent = new EventEmitter<>();
  selectedCard: Card;
  constructor(private combatService: CombatService) {
    this.combatService.SplitSream.subscribe((split: CardSplit) => {
      this.cards = split;
    });
  }

  ngOnInit() {}

  onSelect(card: Card): void {
    this.selectedCard = card;
  }
  playCard(card: Card) {
    this.combatService.playCard(card.id + "");
    //console.log("play card " + card.id);
    //this.playCardEvent.emit(card.id + "");
  }
}
