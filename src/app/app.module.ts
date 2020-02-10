import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { PileViewComponent } from "./pile-view/pile-view.component";
import { HandViewComponent } from "./hand-view/hand-view.component";
import { BattlefieldComponent } from "./battlefield/battlefield.component";
import { PileComponent } from "./pile/pile.component";

@NgModule({
  declarations: [
    AppComponent,
    PileViewComponent,
    HandViewComponent,
    BattlefieldComponent,
    PileComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
