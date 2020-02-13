import { DISCARD } from "./../mock-cards";
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
  // cardSplit: CardSplit;
  showDiscardPile = false;
  showDrawPile = false;
  endingTurn = false;
  constructor(private dealerService: DealerService) {}

  updateCards() {
    this.dealerService.getSplit().subscribe(
      (split: CardSplit) => (
        (this.hand = (split as any).hand),
        (this.discardPile = (split as any).discardPile),
        (this.drawPile = (split as any).drawPile)
      ),
      // The 2nd callback handles errors.
      err => console.log(err),
      // The 3rd callback handles the "complete" event.
      () => (
        console.log(this.hand),
        console.log(this.drawPile),
        console.log(this.discardPile)
      )
    );
  }

  async discardHand() {
    this.dealerService.discardHand().subscribe(
      (split: CardSplit) => (
        (this.hand = (split as any).hand),
        (this.discardPile = (split as any).discardPile),
        (this.drawPile = (split as any).drawPile)
      ),
      // The 2nd callback handles errors.
      err => console.log(err),
      // The 3rd callback handles the "complete" event.
      () => (
        console.log(this.hand),
        console.log(this.drawPile),
        console.log(this.discardPile)
      )
    );
  }

  async playCardFromHand(id: string) {
    console.log("playing card on battlefield " + id);
  }

  async drawHand() {
    this.dealerService.drawHand().subscribe(
      (split: CardSplit) => (
        (this.hand = (split as any).hand),
        (this.discardPile = (split as any).discardPile),
        (this.drawPile = (split as any).drawPile)
      ),
      // The 2nd callback handles errors.
      err => console.log(err),
      // The 3rd callback handles the "complete" event.
      () => (
        console.log(this.hand),
        console.log(this.drawPile),
        console.log(this.discardPile)
      )
    );
  }

  async endTurn() {
    this.endingTurn = true;
    await this.discardHand();
    await this.delay(1000);
    await this.drawHand();
    this.endingTurn = false;
  }
  ngOnInit() {
    // this.dealerService
    //   .getDiscardPile()
    //   .subscribe(DISCARD => (this.discardPile = DISCARD));
    // this.dealerService.getDrawPile().subscribe(DRAW => (this.drawPile = DRAW));
    // this.dealerService.getHand().subscribe(HAND => (this.hand = HAND));
    this.drawHand();
  }
  ngAfterViewInit() {
    // this.updateCards();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() =>
      console.log("fired")
    );
  }
}
