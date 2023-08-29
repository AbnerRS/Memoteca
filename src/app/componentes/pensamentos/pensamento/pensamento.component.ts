import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento ={
    conteudo: 'Angular é vida!',
    autoria: 'Abner',
    modelo: 'modelo3'

  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256 ){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
