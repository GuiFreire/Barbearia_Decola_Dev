import { AgendamentoService } from './../../../services/agendamento.service';
import { Agendamento } from './../../../models/agendamento.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agendamento-delete',
  templateUrl: './agendamento-delete.component.html',
  styleUrls: ['./agendamento-delete.component.css']
})
export class AgendamentoDeleteComponent implements OnInit {

  agendamento: Agendamento
  constructor(private agendamentoService: AgendamentoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.agendamentoService.readById(id).subscribe(agendamento => {
      this.agendamento = agendamento;
    });
  }

  deleteAgendamento(): void {

  }


  cancel(): void {
    this.router.navigate(['/home-funcionario'])
  }


}
