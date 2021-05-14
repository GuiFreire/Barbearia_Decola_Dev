import { Component, OnInit } from '@angular/core';
import { PerfilEditarService } from './perfil-editar.service';
import { PerfilEditar } from './perfil-editar.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.css']
})

export class PerfilEditarComponent implements OnInit {
  perfil: PerfilEditar = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
    url: '',
    tipo: null
  }


  constructor(
    private perfilEditarService: PerfilEditarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPerfil(this.route.snapshot.params.id);
  }

  getPerfil(id: string): void {
    this.perfilEditarService.get(id)
      .subscribe(
        data => {
          this.perfil = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  updatePerfil(): void {
    this.perfilEditarService.update(this.perfil.id, this.perfil)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error)
        }
      )
  }
}