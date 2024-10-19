import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { getRecordDetail, loadRecordList, recordListError } from "../actions/context.actions";
import { RecordService } from "../../core/services/record/record.service";
import { loadRecordDetail, loadRecordListData } from "../actions/data.actions";

export const loadListRecord = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService)) => {
    return actions$.pipe(
      ofType(loadRecordList),
      exhaustMap(() =>
        recordService.getRecordList()
        .pipe(
          map((recordList) => loadRecordListData({ recordList })),
          catchError(() => of(recordListError))
        )
      )
    );
  },
  { functional: true }
);

export const tryloadRecordDetail = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService)) => {
    return actions$.pipe(
      ofType(getRecordDetail),
      exhaustMap(data =>
        recordService.getRecordDetail(data.recordId)
        .pipe(
          map(record => loadRecordDetail({ record: record! })),
          catchError(() => of(recordListError))
        )
      )
    );
  },
  { functional: true }
);
