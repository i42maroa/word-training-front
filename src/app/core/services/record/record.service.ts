import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DefinitionInterface, EXAMPLE_RECORD, ExampleInterface, RecordInterface } from '../../../data/record.interface';
import { NotificationService } from '../notification/notification.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

 private $recordList= new BehaviorSubject<Map<string, RecordInterface>>(new Map([[EXAMPLE_RECORD._id, EXAMPLE_RECORD]]));

constructor(
  private readonly notification:NotificationService,
  private readonly http:HttpClient){ }

 getRecordsByFilters(filter:any):Observable<Map<string, RecordInterface>>{
  this.http.get('')
    return this.$recordList.asObservable();

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
}
