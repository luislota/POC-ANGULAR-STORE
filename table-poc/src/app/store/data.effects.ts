import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { dataAPI, dataAPISuccess, dataAPIFailed } from '../store/actions/scoreboard-page.actions';

@Injectable()
export class DataEffects {

    // logActions$ = createEffect(() =>
    //     this.actions$.pipe(
    //         tap(action => console.log(action))
    //     ), { dispatch: false });

    constructor(private actions$: Actions, private store: Store) {
    }
}
