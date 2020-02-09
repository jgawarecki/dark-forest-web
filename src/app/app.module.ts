import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { DeckviewComponent } from './deck-view/deck-view.component';
import { HandViewComponent } from './hand-view/hand-view.component';
import { BattlefieldComponent } from './battlefield/battlefield.component';

@NgModule({
  declarations: [AppComponent, DeckviewComponent, HandViewComponent, BattlefieldComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
