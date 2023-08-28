import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  pensamento ={
    conteudo: 'Angular é vida!',
    autoria: 'Abner',
    modelo: 'modelo3'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
