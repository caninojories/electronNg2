import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  CommonModule
} from '@angular/common';
import {
  GameSelectionComponent
} from './game.selection.component';
import {
  GameSelectionMainComponent
} from './game.selection.main.component';

import {gameSelectionRouting} from './game.selection.routing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    gameSelectionRouting
  ],
  declarations: [
    GameSelectionComponent,
    GameSelectionMainComponent
  ],
  providers: [
  ]
})
export class GameSelectionModule {}
