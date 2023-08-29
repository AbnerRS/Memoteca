import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento/pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

   private readonly API = 'http://localhost:3000/pensamento'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Pensamento[]>(this.API)
  }
}
