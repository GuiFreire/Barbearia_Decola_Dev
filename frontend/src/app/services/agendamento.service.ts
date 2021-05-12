import { Agendamento } from './../models/agendamento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AgendamentoService {
  baseUrl = ""

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.baseUrl, agendamento)
  }

  read(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.baseUrl)
  }

  readById(id: string): Observable<Agendamento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Agendamento>(url)
  }

  update(agendamento: Agendamento): Observable<Agendamento> {
    const url = `${this.baseUrl}/${agendamento.id}`
    return this.http.put<Agendamento>(url, agendamento)
  }

  delete(id: string): Observable<Agendamento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Agendamento>(url);
  }

}
