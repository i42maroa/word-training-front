import { Injectable } from '@angular/core';
import { first, Observable, of, switchMap, tap } from 'rxjs';
import { RecordInterface } from '../../../data/record.interface';
import { NotificationService } from '../notification/notification.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginationRecordResponse } from '../../../data/pagination.interface';
import { DefinitionNewRequest, ExampleNewRequest, RecordNewRequest } from '../../../data/api.interface';
import { Store } from '@ngrx/store';
import { selectData } from '../../../state/selectors/data.selector';
import { DataInterfaceState} from '../../../data/data-state.interface';
import { FiltersRequest, translateTypeInFilter } from '../../../data/filters';

@Injectable({
  providedIn: 'root'
})
export class RecordService {


constructor(
  private readonly notification:NotificationService,
  private readonly store:Store,
  private readonly http:HttpClient){ }

 getRecordsByFilters(filter:any):Observable<RecordInterface[]>{

  return of([]) as Observable<RecordInterface[]>
 }

 getRecordDetail(id:string):Observable<RecordInterface|undefined>{
  return this.http.get<RecordInterface>("http://localhost:8080/record/" + id)
  .pipe(tap(m => console.log(m)));
 }


 addNewRecord(record:RecordNewRequest ): Observable<RecordInterface>{
  return this.http.post<RecordInterface>("http://localhost:8080/record", record)
  .pipe(tap(m => console.log(m)))
 }

 modificateRecord(recordId: string, modifiedRecord:RecordNewRequest): Observable<RecordInterface>{
  return this.http.put<RecordInterface>("http://localhost:8080/record/" + recordId, modifiedRecord)
  .pipe(tap(m => console.log(m)))
 }

 deleteRecord(recordId:string):Observable<any>{
  return this.http.delete("http://localhost:8080/record/" + recordId)
 }

 addNewDefinition(id:string, definition:DefinitionNewRequest):Observable<RecordInterface>{
  return this.http.post<RecordInterface>("http://localhost:8080/record/"+ id + "/definition", definition)
  .pipe(tap(m => console.log(m)))
 }

 addNewExample(id:string, idDefinition:string, example: ExampleNewRequest): Observable<RecordInterface>{
  return this.http.post<RecordInterface>("http://localhost:8080/record/"+ id + "/definition/" + idDefinition + "/example", example)
  .pipe(tap(m => console.log(m)))
 }

 getRecordList():Observable<PaginationRecordResponse>{


  return this.store.select(selectData)
     .pipe(
      first(),
      switchMap((data: DataInterfaceState) => {
        console.log(data)
        const params = new HttpParams()
          .set('page', data.pagination.page)
          .set('size', data.pagination.size);

        const storeFilters = data.filters;
        const body:FiltersRequest ={
          typeIn: translateTypeInFilter(storeFilters.typeIn),
          text: storeFilters.text,
          pending: storeFilters.pending
        };

         return this.http.post<PaginationRecordResponse>("http://localhost:8080/record/page", body, { params});
       }),
       tap(m => console.log(m)));
 }
}
