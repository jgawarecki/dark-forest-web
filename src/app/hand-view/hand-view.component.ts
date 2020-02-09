import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../Card";

@Component({
  selector: "app-hand-view",
  templateUrl: "./hand-view.component.html",
  styleUrls: ["./hand-view.component.scss"]
})
export class HandViewComponent implements OnInit {
  @Input() cards: Card[];
  constructor() {}

  ngOnInit() {}
}
