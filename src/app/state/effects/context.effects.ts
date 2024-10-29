import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { getRecordDetail, getRecordsList, removeRecord, removeRecordSuccessfull, saveNewDefinition, saveNewDefinitionSuccessfull, saveNewExample, saveNewExampleSuccessfull, saveNewRecord, saveNewRecordSuccessfull } from "../actions/context.actions";
import { RecordService } from "../../core/services/record/record.service";
import { loadRecordDetail, loadRecordListData } from "../actions/data.actions";
import { Router } from "@angular/router";

export const loadListRecord = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService)) => {
    return actions$.pipe(
      ofType(getRecordsList),
      exhaustMap(() =>
        recordService.getRecordList()
        .pipe(
          map((recordList) => loadRecordListData({ recordList })),
          catchError(() => of())
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
          catchError(() => of())
        )
      )
    );
  },
  { functional: true }
);


export const trySaveNewRecord = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService)) => {
    return actions$.pipe(
      ofType(saveNewRecord),
      exhaustMap(data =>
        recordService.addNewRecord(data.recordRequest)
        .pipe(
          map(() => saveNewRecordSuccessfull()),
          map(() => getRecordsList())
        )
      )
    );
  },
  { functional: true }
);

export const trySaveNewDefinition = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService)) => {
    return actions$.pipe(
      ofType(saveNewDefinition),
      exhaustMap(data =>
        recordService.addNewDefinition(data.recordId, data.definitionRequest)
        .pipe(
          map(() => saveNewDefinitionSuccessfull()),
          map(() => getRecordDetail({recordId:data.recordId}))
        )
      )
    );
  },
  { functional: true }
);

export const trySaveNewExample = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService)) => {
    return actions$.pipe(
      ofType(saveNewExample),
      exhaustMap(data =>
        recordService.addNewExample(data.recordId, data.definitionId, data.exampleRequest)
        .pipe(
          map(() => saveNewExampleSuccessfull()),
          map(() => getRecordDetail({recordId:data.recordId}))
        )
      )
    );
  },
  { functional: true }
);

export const tryRemoveRecord = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService), router = inject(Router)) => {
    return actions$.pipe(
      ofType(removeRecord),
      exhaustMap(data =>
        recordService.deleteRecord(data.recordId)
        .pipe(
          map(() => {
            router.navigate(['/']);
            return removeRecordSuccessfull();
          }
      )))
    );
  },
  { functional: true }
);
