import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DefinitionInterface, EXAMPLE_RECORD, ExampleInterface, RecordInterface } from '../../../data/record.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

 private $recordList= new BehaviorSubject<Map<string, RecordInterface>>(new Map([[EXAMPLE_RECORD._id, EXAMPLE_RECORD]]));

 getRecordsByFilters(filter:any):Observable<Map<string, RecordInterface>>{
    return this.$recordList.asObservable();
 }

 getRecordDetail(id:string):Observable<RecordInterface|undefined>{
    return this.$recordList.pipe(
      map((val)=> val.get(id))
    );
 }


 addNewRecord(record:RecordInterface ){
  console.log(record)
  this.$recordList.value.set(record._id, record);
 }

 modificateRecord(record:RecordInterface){
  console.log(record._id, record)
 }

 deleteRecord(){}

 addNewDefinition(id:string, definition:DefinitionInterface){
  console.log(id,definition)
 }

 addNewExample(id:string, idDefinition:string, example: ExampleInterface){
    console.log(id, idDefinition, example)
 }
}
