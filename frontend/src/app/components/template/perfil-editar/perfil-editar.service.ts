import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { PerfilEditar } from './perfil-editar.model'

const baseUrl = 'http://localhost:8080/api/usuario';

@Injectable({
  providedIn: 'root'
})
export class PerfilEditarService {

  constructor(private http:HttpClient) { }

  update(id:any,data:any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  get(id: any): Observable<PerfilEditar>{
    return this.http.get(`${baseUrl}/${id}`)
  }
}
