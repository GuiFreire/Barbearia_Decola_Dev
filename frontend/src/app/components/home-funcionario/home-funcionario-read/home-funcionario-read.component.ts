import { AgendamentoService } from './../../../services/agendamento.service';
import { Agendamento } from './../../../models/agendamento.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-funcionario-read',
  templateUrl: './home-funcionario-read.component.html',
  styleUrls: ['./home-funcionario-read.component.css']
})
export class HomeFuncionarioReadComponent implements OnInit {

  agendamentos: Agendamento[] = [];
  
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
