import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as CONFIG from '../../app.config';
import { ResponseData } from '../models/response.model';
@Injectable( {
  providedIn: 'root'
} )
export class BaseService {
  constructor ( private http: HttpClient ) { }

  public get<T>( url: string, params?: any, headers?: any ): any {
    return this.http
      .get( CONFIG.API_ENDPOINT + url, { params, headers } )
      .pipe( map( result => result as T ) );
  }

  public post<T>( url: string, data?: any, headers?: any ): Observable<any> {
    return this.http
      .post( CONFIG.API_ENDPOINT + url, data, { headers } )
      .pipe( map( result => result ) );
  }

  public put<T>( url: string, data: any, headers?: any ): Observable<T> {
    return this.http
      .put( CONFIG.API_ENDPOINT + url, data, { headers } )
      .pipe( map( result => result as T ) );
  }

  public delete<T>( url: string, data: any, headers?: any ): Observable<T> {
    return this.http
      .delete( CONFIG.API_ENDPOINT + url, {
        headers,
        params: data
      } )
      .pipe( map( result => result as T ) );
  }

  public getDetail<T>(
    url: string,
    id: string,
    nameParam: string,
    headers?: any
  ): Observable<T> {
    const httpParams = new HttpParams().set( nameParam, id );
    return this.http
      .get( CONFIG.API_ENDPOINT + url, {
        headers,
        params: httpParams
      } )
      .pipe( map( result => result as T ) );
  }
}
