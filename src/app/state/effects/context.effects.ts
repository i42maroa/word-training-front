import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap } from "rxjs";
import { errorInApi, getRecordDetail, getRecordDetailSuccessfull, getRecordsList, getRecordsListPaginated, modifyRecord, modifyRecordSuccessfull, removeRecord, removeRecordSuccessfull, saveNewDefinition, saveNewDefinitionSuccessfull, saveNewExample, saveNewExampleSuccessfull, saveNewRecord, saveNewRecordSuccessfull } from "../actions/context.actions";
import { RecordService } from "../../core/services/record/record.service";
import { addRecordListPaginatedData, loadRecordDetail, loadRecordListData } from "../actions/data.actions";
import { Router } from "@angular/router";
import { NotificationService } from "../../core/services/notification/notification.service";

export const loadListRecord = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService)) => {
    return actions$.pipe(
      ofType(getRecordsList),
      mergeMap(() =>
        recordService.getRecordList()
        .pipe(
          map((recordList) => loadRecordListData({ recordList })),
          catchError(() => of(errorInApi()))
        )
      ),
      tap(e => console.log("load"))
    );
  },
  { functional: true }
);

export const tryloadListRecordPaginated = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService)) => {
    return actions$.pipe(
      ofType(getRecordsListPaginated),
      mergeMap(() =>
        recordService.getRecordList()
        .pipe(
          map((recordList) => addRecordListPaginatedData({ recordList })),
          catchError(() => of(errorInApi()))
        )
      ),
      tap(e => console.log("load"))
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
            switchMap(record =>
              of(getRecordDetailSuccessfull(),
                loadRecordDetail({ record: record!}))
            ),
            catchError(() => of(errorInApi()))
          )
      )
    );
  },
  { functional: true }
);


export const trySaveNewRecord = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService), notification = inject(NotificationService)) => {
    return actions$.pipe(
      ofType(saveNewRecord),
      exhaustMap(data =>
        recordService.addNewRecord(data.recordRequest)
        .pipe(
          mergeMap(() => of(saveNewRecordSuccessfull(),
          getRecordsList()
        )),
          tap(() => notification.showSuccessfullyMessage("Nuevo registro añadido correctamente")),
          catchError(() => of(errorInApi()))
        )
      )
    );
  },
  { functional: true }
);


export const trySaveNewDefinition = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService), notification = inject(NotificationService)) => {
    return actions$.pipe(
      ofType(saveNewDefinition),
      exhaustMap(data =>
        recordService.addNewDefinition(data.recordId, data.definitionRequest)
        .pipe(
          switchMap(record => of(
              saveNewDefinitionSuccessfull(),
              loadRecordDetail({ record}))
          ),
          tap(() => notification.showSuccessfullyMessage("Definición añadida correctamente"))
        )
      )
    );
  },
  { functional: true }
);

export const trySaveNewExample = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService), notification = inject(NotificationService)) => {
    return actions$.pipe(
      ofType(saveNewExample),
      exhaustMap(data =>
        recordService.addNewExample(data.recordId, data.definitionId, data.exampleRequest)
        .pipe(
          switchMap(record => of(saveNewExampleSuccessfull(),
          loadRecordDetail({ record}))),
          tap(() => notification.showSuccessfullyMessage("Ejemplo añadido correctamente")),
          catchError(() => of(errorInApi()))
        )
      )
    );
  },
  { functional: true }
);

export const tryModifyRecord = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService), notification = inject(NotificationService)) => {
    return actions$.pipe(
      ofType(modifyRecord),
      exhaustMap(data =>
        recordService.modificateRecord(data.recordId, data.recordRequest)
          .pipe(
            switchMap(record => of(
              modifyRecordSuccessfull(), loadRecordDetail({record}))
            ),
            tap(() => notification.showSuccessfullyMessage("Registro modificado correctamente")),
            catchError(() => of(errorInApi()))
          )
    )
    );
  },
  { functional: true }
);


export const tryRemoveRecord = createEffect(
  (actions$ = inject(Actions), recordService = inject(RecordService), router = inject(Router), notification = inject(NotificationService)) => {
    return actions$.pipe(
      ofType(removeRecord),
      exhaustMap(data =>
        recordService.deleteRecord(data.recordId)
        .pipe(
          map(() => {
            router.navigate(['/']);
            return removeRecordSuccessfull();
          }),
          tap(() => notification.showSuccessfullyMessage("Registro eliminado correctamente"))
    ))
    );
  },
  { functional: true }
);
