import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DealerService } from "./../dealer.service";
import { Card } from "../Card";
// import { EventEmitter } from "protractor";

@Component({
  selector: "app-hand-view",
  templateUrl: "./hand-view.component.html",
  styleUrls: ["./hand-view.component.scss"]
})
export class HandViewComponent implements OnInit {
  @Input() hand: Card[];
  @Output() playCardEvent = new EventEmitter<string>();
  // @Output() messageEvent = new EventEmitter<>();
  selectedCard: Card;
  constructor(private dealerService: DealerService) {}

  ngOnInit() {}

  onSelect(card: Card): void {
    this.selectedCard = card;
  }
  playCard(card: Card) {
    console.log("play card " + card.id);
    this.playCardEvent.emit(card.id + "");
  }
}
