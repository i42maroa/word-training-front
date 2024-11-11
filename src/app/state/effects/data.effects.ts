import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { changeFilters, changePaginationPage, checkIsRecordPrecharged, loadRecordListData } from "../actions/data.actions";
import { getRecordDetail, getRecordsList, loadRecordsListSuccessfully } from "../actions/context.actions";
import { map } from "rxjs";

export const loadRecordSuccessfull = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(loadRecordListData),
      map(() => loadRecordsListSuccessfully())
    );
  },
  { functional: true }
);


export const loadRecordDetailPrecharge = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(checkIsRecordPrecharged),
      map(data => getRecordDetail({recordId:data.recordId}))
    );
  },
  { functional: true }
);

export const isChangeFilters = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(changeFilters),
      map(() => getRecordsList())
    );
  },
  { functional: true }
);


export const changePagination = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(changePaginationPage),
      map(() => getRecordsList())
    );
  },
  { functional: true }
);
