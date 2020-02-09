import { Component, OnInit } from "@angular/core";
import { CARDS } from "../mock-cards";
import { Card } from "../Card";

@Component({
  selector: "app-battlefield",
  templateUrl: "./battlefield.component.html",
  styleUrls: ["./battlefield.component.scss"]
})
export class BattlefieldComponent implements OnInit {
  cards = CARDS;
  constructor() {}

  ngOnInit() {}
}
