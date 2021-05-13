import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoService } from './contato.service';
import { Contato } from './contato.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatoService: ContatoService, private router: Router) { }

  contato: Contato = {
    nome: '',
    celular: '',
    email: '',
    assunto: '',
    mensagem: ''
  }

  ngOnInit(): void {
  }

  createContato(): void {
    this.contatoService.create(this.contato).subscribe(() => {
      this.router.navigate(['/contato'])
    })
  }

}
