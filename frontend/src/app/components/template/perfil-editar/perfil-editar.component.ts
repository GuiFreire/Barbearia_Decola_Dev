import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil.model';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.css']
})
//export class PerfilEditarComponent implements OnInit {

// constructor() { }

export class PerfilEditarComponent implements OnInit {
  perfil: Perfil = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
    url: '',

  };
  submitted = false;

  constructor(private perfilservice: PerfilService) { }

  ngOnInit(): void {
  }

}
