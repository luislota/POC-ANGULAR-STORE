import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from '../actions/scoreboard-page.actions';

export interface State {
    home: number;
    away: number;
    columnsInitial?: Array<any>;
    data?: Array<any>;
    error?: boolean;
    loading?: boolean;
}

export const initialState: State = {
    home: 0,
    away: 0,
    columnsInitial: [],
    data: [],
    error: null,
    loading: false
};

const scoreboardReducer = createReducer(
    initialState,
    on(ScoreboardPageActions.applyColumns, (state) => ({ ...state, columnsInitial: ['position', 'name', 'weight', 'symbol'] })),
    on(ScoreboardPageActions.dataAPI, (state) => ({ ...state, loading: false, error: false }))

);

// tslint:disable-next-line: typedef
export function reducer(state: State | undefined, action: Action) {
    return scoreboardReducer(state, action);
}

export const scoreboardFeatureKey = 'game';
