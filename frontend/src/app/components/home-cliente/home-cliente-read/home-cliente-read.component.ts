import { AgendamentoService } from './../../../services/agendamento.service';
import { Agendamento } from './../../../models/agendamento.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-cliente-read',
  templateUrl: './home-cliente-read.component.html',
  styleUrls: ['./home-cliente-read.component.css']
})
export class HomeClienteReadComponent implements OnInit {

  agendamentos: Agendamento[]
  displayedColumns = ['id', 'data', 'cliente', 'funcionario', 'servico']

  constructor(private agendamentoService: AgendamentoService, private router: Router) { }

  ngOnInit(): void {
    this.agendamentoService.read().subscribe(agendamento => {
      this.agendamentos = agendamento
    })
  }

  navigateToAgendamentoCreate(): void {
    this.router.navigate(['/agendamento/create'])
  }

}

