import { DealerService } from "./../dealer.service";
import { Component, OnInit } from "@angular/core";
// import { DISCARD, HAND, DRAW } from "../mock-cards";
import { Card } from "../Card";
import { CardSplit } from "../CardSplit";

@Component({
  selector: "app-battlefield",
  templateUrl: "./battlefield.component.html",
  styleUrls: ["./battlefield.component.scss"]
})
export class BattlefieldComponent implements OnInit {
  discardPile: Card[];
  hand: Card[];
  drawPile: Card[];
  cardSplit: CardSplit;
  showDiscardPile = false;
  showDrawPile = false;
  constructor(private dealerService: DealerService) {}

  ngOnInit() {
    this.dealerService
      .getDiscardPile()
      .subscribe(DISCARD => (this.discardPile = DISCARD));
    this.dealerService.getDrawPile().subscribe(DRAW => (this.drawPile = DRAW));
    this.dealerService.getHand().subscribe(HAND => (this.hand = HAND));
    this.dealerService.getSplit().subscribe(split => (this.cardSplit = split));
  }
}
