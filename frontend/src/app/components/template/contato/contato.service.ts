import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from './contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  baseUrl = "http://localhost:8080/api/atendimento"

  constructor(private http: HttpClient) { }

  create(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.baseUrl, contato)
  }
}
