import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from './cadastro.service';
import { Cadastro } from './cadastro.model';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private cadastroService: CadastroService, private router: Router) { }

  cadastro: Cadastro = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
    url: '',
  }

  ngOnInit(): void {
  }

  createCadastro(): void {
    this.cadastroService.create(this.cadastro).subscribe(() => {
      this.cadastroService.showMessage('Cadastro criado com sucesso!')
      this.router.navigate(['/login'])
    })
  }

}
