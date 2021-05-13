import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from './contato.model';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  baseUrl = "http://localhost:8080/api/atendimento"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  create(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.baseUrl, contato)
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
