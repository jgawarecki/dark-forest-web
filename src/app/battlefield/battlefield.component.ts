import { Component, OnInit } from "@angular/core";
import { DISCARD, HAND, DRAW } from "../mock-cards";
import { Card } from "../Card";

@Component({
  selector: "app-battlefield",
  templateUrl: "./battlefield.component.html",
  styleUrls: ["./battlefield.component.scss"]
})
export class BattlefieldComponent implements OnInit {
  discardPile = DISCARD;
  hand = HAND;
  drawPile = DRAW;
  showDiscardPile = false;
  showDrawPile = false;
  constructor() {}

  ngOnInit() {}
}
