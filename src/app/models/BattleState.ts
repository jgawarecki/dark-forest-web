import { Combatant } from "./Combatant";
import { CardSplit } from "./CardSplit";
import { Card } from "./Card";

export class BattleState {
  cardSplit: CardSplit;
  players: Combatant[];
  foes: Combatant[];

  constructor() {}
}
