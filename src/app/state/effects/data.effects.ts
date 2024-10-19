import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { checkIsRecordPrecharged, loadRecordDetail, loadRecordListData } from "../actions/data.actions";
import { exhaustMap, map } from "rxjs";
import { getRecordDetail, recordListLoadedSuccessfully } from "../actions/context.actions";
import { Store } from "@ngrx/store";
import { selectRecordList } from "../selectors/data.selector";

export const loadRecordSuccessfull = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(loadRecordListData),
      map(() => recordListLoadedSuccessfully())
    );
  },
  { functional: true }
);


export const loadRecordDetailPrecharge = createEffect(
  (actions$ = inject(Actions), store = inject(Store)) => {
    return actions$.pipe(
      ofType(checkIsRecordPrecharged),
      exhaustMap(data => store.select(selectRecordList)
        .pipe(
          map(recordList => {
            const isInList = recordList.items.map(r => r.recordId).includes(data.recordId);
            if (isInList){
             return loadRecordDetail({record: recordList.items.find(r => r.recordId === data.recordId)!})
            }else{
             return getRecordDetail({recordId:data.recordId});
            }
          })
      )
      )
    );
  },
  { functional: true }
);

