import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadRecordListData } from "../actions/data.actions";
import { map } from "rxjs";
import { recordListLoadedSuccessfully } from "../actions/context.actions";

export const loadRecordSuccessfull = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(loadRecordListData),
      map(() => recordListLoadedSuccessfully())
    );
  },
  { functional: true }
);
