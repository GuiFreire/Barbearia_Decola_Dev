import { UsuarioService } from './../../../services/usuario.service';
import { Usuario } from './../../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
    url: '',
    tipo: 0
  }

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.usuarioService.readById(id).subscribe(usuario => {
        this.usuario = usuario;
      });
    }
  }

  updateUsuario(): void {
    this.usuarioService.update(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Usuario atualizado com sucesso')
      this.router.navigate(['/usuario/read']);
    });
  }

  cancel(): void {
    this.router.navigate(['/usuario/read'])
  }
}
