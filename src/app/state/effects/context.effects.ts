import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { loadRecordList, recordListError } from "../actions/context.actions";
import { RecordService } from "../../core/services/record/record.service";
import { loadRecordListData } from "../actions/data.actions";

export const loadListRecord = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService)) => {
    return actions$.pipe(
      ofType(loadRecordList),
      tap(()=> console.log('dsa')),
      exhaustMap(() =>
        recordService.getRecordList()
        .pipe(
          map((recordList) => loadRecordListData({ recordList })),
          catchError(() =>
            of(recordListError)),
          tap(m => console.log(m))
        )
      )
    );
  },
  { functional: true }
);
