import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import serviceConfig from '../../assets/config.json';
import {isKeyof} from '../app.component';

export interface Options {
  headers?: HttpHeaders | {[header: string]: string | string[]};
  observe?: 'body' | 'events' | 'response';
  params?: HttpParams|{[param: string]: string | string[]};
  reportProgress?: boolean;
  responseType?: 'arraybuffer'|'blob'|'json'|'text';
  withCredentials?: boolean;
}

export const defaultOptions = {
  observe: 'response' as const,
  responseType: 'json' as const,
  params: undefined
};

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  constructor(private http: HttpClient) { }

  setURL(url){
    let URL = isKeyof(serviceConfig, url) ? serviceConfig[url] : url;
    URL = serviceConfig.root + URL;
    // console.log(URL);
    return URL;
  }

  get(url, options = defaultOptions){ 
      // const result = null;
      return this.http.get(this.setURL(url), options); // .subscribe((data: any) => result = { ...data} );
      // return result;
  }

  post(url, data: any = {}, options = defaultOptions){ 
    // const result = null;
    return this.http.post(this.setURL(url), data, options); // .subscribe((data: any) => result = { ...data} );
    // return result;
  }
}


