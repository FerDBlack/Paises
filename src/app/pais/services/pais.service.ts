import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {RespCountriesType} from "../interfaces/pais.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrlRegiones: string = 'https://restcountries.com/v2';
  private  httpParams:HttpParams =new HttpParams().set('fields','name,capital,cca2,flags,population');
  constructor(private http : HttpClient) { }

  buscarPais(termino:string):Observable<RespCountriesType[]>{

    const url =`${this.apiUrl}/name/${termino}`;
    return this.http.get<RespCountriesType[]>(url,{params:this.httpParams});
  }

  buscarCapital(termino:string):Observable<RespCountriesType[]>{

    const url =`${this.apiUrl}/capital/${termino}`;
    return this.http.get<RespCountriesType[]>(url,{params:this.httpParams});
  }

  buscarPaisPorCodigo(id:string):Observable<RespCountriesType>{
    const url =`${this.apiUrl}/alpha/${id}`;
    return this.http.get<RespCountriesType>(url);
  }

  buscarRegion(region:string):Observable<RespCountriesType[]>{

    const url =`${this.apiUrl}/region/${region}`;
    return this.http.get<RespCountriesType[]>(url,{params:this.httpParams})
      .pipe(tap(console.log))
  }
}




