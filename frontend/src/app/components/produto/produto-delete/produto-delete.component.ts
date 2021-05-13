import { Router, ActivatedRoute } from "@angular/router";
import { ProdutoService } from './../../../services/produto.service';
import { Produto } from './../../../models/produto.model';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-produto-delete",
  templateUrl: "./produto-delete.component.html",
  styleUrls: ["./produto-delete.component.css"],
})
export class ProdutoDeleteComponent implements OnInit {
  produto: Produto = {
    nome: "", descricao: "", url: ""
  };

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.readById(id).subscribe((produto) => {
        this.produto = produto;
      });
    }
  }

  deleteProduto(): void {
    if (this.produto && this.produto.id) {
      this.produtoService.delete(this.produto.id).subscribe(() => {
        this.produtoService.showMessage("Produto excluído com sucesso!");
        this.router.navigate(["/produto/read"]);
      });
    }
  }

  cancel(): void {
    this.router.navigate(["/produto/read"]);
  }
}