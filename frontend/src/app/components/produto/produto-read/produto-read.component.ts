import { ProdutoService } from './../../../services/produto.service';
import { Produto } from './../../../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[] = [];

  displayedColumns = ['id', 'nome', 'descricao', 'action'];

  constructor(private produtoService: ProdutoService, private router: Router) { }


  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  navigateToProdutoCreate(): void {
    this.router.navigate(['produto/create'])
  }

  navigateToProdutoUpdate(): void {
    this.router.navigate(['produto/update'])
  }

  navigateToProdutoDelete(): void {
    this.router.navigate(['produto/delete'])
  }
}