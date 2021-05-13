import { ProdutoService } from './../../../services/produto.service';
import { Produto } from './../../../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    nome: '',
    descricao: '',
    url: '',
  }

  constructor(private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createProduto(): void {
    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/produto/read'])
    })

  }

  cancel(): void {
    this.router.navigate(['/produto/read'])
  }
}
