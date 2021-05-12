import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-funcionario-crud',
  templateUrl: './home-funcionario-crud.component.html',
  styleUrls: ['./home-funcionario-crud.component.css']
})
export class HomeFuncionarioCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



}
