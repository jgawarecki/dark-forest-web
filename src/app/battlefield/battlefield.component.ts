import { Component, OnInit } from "@angular/core";
import { CARDS, HAND } from "../mock-cards";
import { Card } from "../Card";

@Component({
  selector: "app-battlefield",
  templateUrl: "./battlefield.component.html",
  styleUrls: ["./battlefield.component.scss"]
})
export class BattlefieldComponent implements OnInit {
  cards = CARDS;
  hand = HAND;
  constructor() {}

  ngOnInit() {}
}
