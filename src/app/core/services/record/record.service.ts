import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { DefinitionInterface, RecordInterface } from '../../../data/record.interface';
import { NotificationService } from '../notification/notification.service';
import { HttpClient } from '@angular/common/http';
import { PaginationRecordResponse } from '../../../data/pagination.interface';
import { DefinitionNewRequest, ExampleNewRequest, RequestNewRecord } from '../../../data/api.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordService {


constructor(
  private readonly notification:NotificationService,
  private readonly http:HttpClient){ }

 getRecordsByFilters(filter:any):Observable<RecordInterface[]>{

  return of([]) as Observable<RecordInterface[]>
 }

 getRecordDetail(id:string):Observable<RecordInterface|undefined>{
  return this.http.get<RecordInterface>("http://localhost:8080/record/" + id)
  .pipe(tap(m => console.log(m)));
 }


 addNewRecord(record:RequestNewRecord ): Observable<RecordInterface>{
  return this.http.post<RecordInterface>("http://localhost:8080/record", record)
  .pipe(tap(m => console.log(m)))
 }

 modificateRecord(recordId: string, modifiedRecord:RecordInterface): Observable<RecordInterface>{
  return this.http.put<RecordInterface>("http://localhost:8080/record/" + recordId, modifiedRecord)
  .pipe(tap(m => console.log(m)))
 }

 deleteRecord(recordId:string):Observable<any>{
  return this.http.delete("http://localhost:8080/record/" + recordId)
 }

 addNewDefinition(id:string, definition:DefinitionNewRequest){
  return this.http.post<DefinitionInterface>("http://localhost:8080/record/"+ id + "/definition", definition)
  .pipe(tap(m => console.log(m)))
 }

 addNewExample(id:string, idDefinition:string, example: ExampleNewRequest){
  return this.http.post<DefinitionInterface>("http://localhost:8080/record/"+ id + "/definition/" + idDefinition + "/example", example)
  .pipe(tap(m => console.log(m)))
 }

 getRecordList():Observable<PaginationRecordResponse>{
    return this.http.get<PaginationRecordResponse>("http://localhost:8080/record/page/WORD")
    .pipe(tap(m => console.log(m)));
 }
}
