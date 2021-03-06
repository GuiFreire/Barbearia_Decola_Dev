import { UsuarioService } from './../../../services/usuario.service';
import { Usuario } from './../../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {

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

  deleteUsuario(): void {
    if(this.usuario.id){
      this.usuarioService.delete(this.usuario.id).subscribe(() => {
        this.usuarioService.showMessage("Usuário excluído com sucesso!");
        this.router.navigate(['/usuario/read']);
      });
    }
    
  }

  cancel(): void {
    this.router.navigate(['/usuario/read'])
  }

}
