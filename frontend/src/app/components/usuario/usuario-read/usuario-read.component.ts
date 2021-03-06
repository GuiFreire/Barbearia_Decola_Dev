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

  usuarios: Usuario[] = [];
  
  displayedColumns = ['nome', 'cpf', 'email', 'telefone', 'action']

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios
    })
  }

  navigateToUsuarioCreate(): void {
    this.router.navigate(['/usuario/create'])
  }


}
