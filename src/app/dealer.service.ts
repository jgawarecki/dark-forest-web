import { DRAW, DISCARD, HAND } from "./mock-cards";
import { Injectable } from "@angular/core";
import { Card } from "./Card";
import { CardSplit } from "./CardSplit";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DealerService {
  url = "https://localhost:5001/dealer/getsplit";

  constructor(private http: HttpClient) {}
  getDiscardPile(): Observable<Card[]> {
    return of(DISCARD);
  }
  getDrawPile(): Observable<Card[]> {
    return of(DRAW);
  }
  getHand(): Observable<Card[]> {
    return of(HAND);
  }
  getSplit(): Observable<CardSplit> {
    return this.http.get<CardSplit>(this.url);
  }
}
