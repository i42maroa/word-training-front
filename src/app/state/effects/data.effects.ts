import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addRecordListPaginatedData, changeFilters, changePaginationPage, loadRecordListData } from "../actions/data.actions";
import { getRecordsList, getRecordsListPaginated, loadRecordListPaginatedSuccessfully, loadRecordsListSuccessfully } from "../actions/context.actions";
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

export const tryAddRecordListPaginatedData = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(addRecordListPaginatedData),
      map(() => loadRecordListPaginatedSuccessfully())
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
      map(() => getRecordsListPaginated())
    );
  },
  { functional: true }
);


