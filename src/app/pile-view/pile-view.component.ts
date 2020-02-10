import { Card } from "../Card";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pile-view",
  templateUrl: "./pile-view.component.html",
  styleUrls: ["./pile-view.component.scss"]
})
export class PileViewComponent implements OnInit {
  @Input() cards: Card[];

  constructor() {}

  ngOnInit() {}
}
