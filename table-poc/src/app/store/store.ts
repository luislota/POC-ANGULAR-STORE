import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props, select } from '@ngrx/store';
import { delay, map } from 'rxjs/operators';


export const selectGame = (state) => state.game;


export const getColumns = createSelector(
    selectGame,
    (state) => state.columnsInitial
);
