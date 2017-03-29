import {
  ModuleWithProviders
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  GameSelectionMainComponent
} from './game.selection.main.component';
import {
  GameSelectionComponent
} from './game.selection.component';

export const gameSelectionRoutes: Routes = [{
  path: 'game-selection',
  component: GameSelectionMainComponent,
  children: [{
    path: '',
    data: {
      queryParams: 'children'
    },
    component: GameSelectionComponent
  }]
}];

export const gameSelectionRouting: ModuleWithProviders = RouterModule.forChild(gameSelectionRoutes);
