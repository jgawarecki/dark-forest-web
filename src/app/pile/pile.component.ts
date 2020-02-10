import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../Card";

@Component({
  selector: "app-pile",
  templateUrl: "./pile.component.html",
  styleUrls: ["./pile.component.scss"]
})
export class PileComponent implements OnInit {
  @Input() cards: Card[];
  topCard: Card;

  constructor() {}

  ngOnInit() {
    this.topCard = this.cards[0];
  }
}
