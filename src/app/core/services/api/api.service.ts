import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string;

  constructor(
    private readonly http:HttpClient) {
    this.url = environment.API_URL
  }

  get<T>(url:string, params?:HttpParams): Observable<T>{
    return this.http.get<T>(environment.API_URL + url, {params});
  }

  post<T, U>(url:string, value:U, params?:HttpParams):Observable<T>{
    return this.http.post<T>(environment.API_URL + url, value, {params});
  }

  put<T, U>(url:string, value:U, params?:HttpParams):Observable<T>{
    return this.http.put<T>(environment.API_URL + url, value, {params});
  }

  delete<T>(url:string): Observable<T>{
    return this.http.delete<T>(environment.API_URL + url);
  }
}
