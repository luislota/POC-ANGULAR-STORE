import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
// import * as fromScoreboard from './reducers/scoreboard.reducer';
import * as fromScoreboard from '../app/store/reducer/scoreboard.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromScoreboard.scoreboardFeatureKey, fromScoreboard.reducer)
  ],
})
export class ScoreboardModule {}