import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";
import { getRecordDetail, getRecordsList} from "../actions/context.actions";
import { detailPageTakeOff, landingPageTakeOff } from "../actions/navigation.actions";


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
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(detailPageTakeOff),
      map(data => getRecordDetail({recordId:data.recordId}))
    );
  },
  { functional: true }
);
