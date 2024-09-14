import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { EXAMPLE_RECORD, RecordInterface } from '../../../data/record.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

 private $recordList= new BehaviorSubject<Map<string, RecordInterface>>(new Map([[EXAMPLE_RECORD._id, EXAMPLE_RECORD]]));
// private $recordDetail= new BehaviorSubject<RecordInterface | undefined>(undefined);

 getRecordsByFilters(filter:any):Observable<Map<string, RecordInterface>>{
    return this.$recordList.asObservable();
 }

 getRecordDetail(id:string):Observable<RecordInterface|undefined>{
    return this.$recordList.pipe(
      map((val)=> val.get(id))
    );
 }

  getRecordFromApi(id:string){
    //emulte request api
    // this.$recordDetail.next(EXAMPLE_RECORD)
  }

 //All this methods we have to send to the api
 saveNewRecord(record:RecordInterface ){
  this.$recordList.value.set(record._id, record);
 }

 modificateRecord(){}

 deleteRecord(){}
}
