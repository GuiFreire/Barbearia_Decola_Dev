import { ProdutoService } from './../../../services/produto.service';
import { Produto } from './../../../models/produto.model';
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-produto-update",
  templateUrl: "./produto-update.component.html",
  styleUrls: ["./produto-update.component.css"],
})
export class ProdutoUpdateComponent implements OnInit {
  produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.produtoService.readById(id).subscribe(produto => {
      this.produto = produto;
      console.log(produto)
    });
  }

  updateProduto(): void {
    this.produtoService.update(this.produto).subscribe(() => {
      this.produtoService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/produto/read"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/produto/read"]);
  }
}