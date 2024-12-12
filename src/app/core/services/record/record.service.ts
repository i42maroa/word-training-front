import { Injectable } from '@angular/core';
import { first, Observable, switchMap } from 'rxjs';
import { RecordInterface } from '../../../data/record.interface';
import { HttpParams } from '@angular/common/http';
import { PaginationRecordResponse } from '../../../data/pagination.interface';
import { DefinitionNewRequest, ExampleNewRequest, RecordNewRequest } from '../../../data/api.interface';
import { Store } from '@ngrx/store';
import { selectData } from '../../../state/selectors/data.selector';
import { DataInterfaceState} from '../../../data/data-state.interface';
import { FiltersRequest, translateTypeInFilter } from '../../../data/filters';
import { ApiService } from '../api/api.service';
import { DEFINITION_PATH, EXAMPLE_PATH, PAGE_PATH, RECORD_PATH } from '../../../data/api.constant';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

constructor(
  private readonly store:Store, private apiService:ApiService){ }

 getRecordDetail(recordId:string):Observable<RecordInterface|undefined>{
  const url = `${RECORD_PATH}/${recordId}`;
  return this.apiService.get<RecordInterface>(url);
 }

 addNewRecord(record:RecordNewRequest ): Observable<RecordInterface>{
  const url = RECORD_PATH;
  return this.apiService.post<RecordInterface, RecordNewRequest>(url, record);
 }

 modificateRecord(recordId: string, modifiedRecord:RecordNewRequest): Observable<RecordInterface>{
  const url = `${RECORD_PATH}/${recordId}`;
  return this.apiService.put<RecordInterface, RecordNewRequest>(url, modifiedRecord);
 }

 deleteRecord(recordId:string):Observable<unknown>{
  const url = `${RECORD_PATH}/${recordId}`;
  return this.apiService.delete(url);
 }

 addNewDefinition(recordId:string, definition:DefinitionNewRequest):Observable<RecordInterface>{
  const url =`${RECORD_PATH}/${recordId}${DEFINITION_PATH}`;
  return this.apiService.post<RecordInterface, DefinitionNewRequest>(url, definition);
 }

 addNewExample(recordId:string, idDefinition:string, example: ExampleNewRequest): Observable<RecordInterface>{
  const url = `${RECORD_PATH}/${recordId}${DEFINITION_PATH}/${idDefinition}${EXAMPLE_PATH}`;
  return this.apiService.post<RecordInterface, ExampleNewRequest>(url, example);
 }

 getRecordList():Observable<PaginationRecordResponse>{
  return this.store.select(selectData)
     .pipe(
      first(),
      switchMap((data: DataInterfaceState) => {
        const params = new HttpParams()
          .set('page', data.pagination.page)
          .set('size', data.pagination.size);

        const storeFilters = data.filters;
        const body:FiltersRequest ={
          typeIn: translateTypeInFilter(storeFilters.typeIn),
          text: storeFilters.text,
          pending: storeFilters.pending
        };

        const url = `${RECORD_PATH}${PAGE_PATH}`;
        return this.apiService.post<PaginationRecordResponse, FiltersRequest>(url, body, params);
       }));
 }
}
