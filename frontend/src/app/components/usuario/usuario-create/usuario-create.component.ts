import { UsuarioService } from './../../../services/usuario.service';
import { Usuario } from './../../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
    tipo: null,
    url: '',

  }

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createUsuario(): void {
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Usuário criado!')
      this.router.navigate(['/usuario/read'])
    })

  }

  cancel(): void {
    this.router.navigate(['/usuario/read'])
  }

}
