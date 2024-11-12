import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, first, map, mergeMap, of, switchMap } from "rxjs";
import { getRecordDetail, getRecordsList, loadRecordsListSuccessfully} from "../actions/context.actions";
import { detailPageTakeOff, goToDetail, landingPageTakeOff } from "../actions/navigation.actions";
import { checkIsRecordPrecharged, loadRecordDetail } from "../actions/data.actions";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectRecordDetail } from "../selectors/data.selector";


export const landLandingPage = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(landingPageTakeOff),
      map(() => getRecordsList())
    );
  },
  { functional: true }
);


export const landDetailPage = createEffect(
  (actions$ = inject(Actions), store = inject(Store)) => {
    return actions$.pipe(
      ofType(detailPageTakeOff),
      switchMap(data => store.select(selectRecordDetail)
        .pipe(
          first(),
          map(recordPreloaded => {
            if(recordPreloaded === undefined || recordPreloaded.recordId !== data.recordId){
              return getRecordDetail({recordId:data.recordId});
            }
              return loadRecordsListSuccessfully();
          })
        )
      )
    );
  },
  { functional: true }
);


export const goToRecordDetail = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(goToDetail),
      map(data => {
        router.navigate(['/detail', data.record.recordId]);
        return loadRecordDetail({record:data.record});
      })
    );
  },
  { functional: true }
);



