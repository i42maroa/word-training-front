import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, throwError } from 'rxjs';
import { DefinitionInterface, EXAMPLE_RECORD, ExampleInterface, RecordInterface } from '../../../data/record.interface';
import { NotificationService } from '../notification/notification.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PaginationRecordResponse } from '../../../data/pagination.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

 private $recordList= new BehaviorSubject<Map<string, RecordInterface>>(new Map([[EXAMPLE_RECORD._id, EXAMPLE_RECORD]]));

constructor(
  private readonly notification:NotificationService,
  private readonly http:HttpClient){ }

 getRecordsByFilters(filter:any):Observable<RecordInterface[]>{

  return of([]) as Observable<RecordInterface[]>
 }

 getRecordDetail(id:string):Observable<RecordInterface|undefined>{
    return this.$recordList.pipe(
      map((val)=> val.get(id))
    );
 }


 addNewRecord(record:RecordInterface ){
  this.$recordList.value.set(record._id, record);
  this.notification.showSuccessfullyMessage("Registro añadido exitosamente");
 }

 modificateRecord(record:RecordInterface){
  this.notification.showSuccessfullyMessage("Registro modificado exitosamente");
 }

 deleteRecord(recordId:string){
  this.notification.showSuccessfullyMessage("Registro eliminado exitosamente");
 }

 addNewDefinition(id:string, definition:DefinitionInterface){
  this.notification.showSuccessfullyMessage("Definicion añadida exitosamente");
 }

 addNewExample(id:string, idDefinition:string, example: ExampleInterface){
  this.notification.showSuccessfullyMessage("Ejemplo añadido exitosamente");
 }

 getRecordList():Observable<PaginationRecordResponse>{
    return this.http.get<PaginationRecordResponse>("http://localhost:8080/record/page/WORDd")
    ;
 }
}
