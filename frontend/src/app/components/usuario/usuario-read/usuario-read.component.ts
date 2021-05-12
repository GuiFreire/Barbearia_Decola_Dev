import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './../../../services/usuario.service';
import { Usuario } from './../../../models/usuario.model';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuario: Usuario[]
  displayedColumns = ['id', 'nome', 'cpf', 'email', 'telefone', 'tipo', 'url']

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToUsuarioCreate(): void {
    this.router.navigate(['/usuario/create'])
  }


}
