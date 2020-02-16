import { Card } from "./Card";
export class CardSplit {
  drawPile: Card[];
  hand: Card[];
  discardPile: Card[];

  constructor() {
    this.drawPile = new Array<Card>();
    this.hand = new Array<Card>();
    this.discardPile = new Array<Card>();
  }
}
