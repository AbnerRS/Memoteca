import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
    conteudo: 'Comunicacao entre componentes!',
    autoria: 'Abner',
    modelo: 'modelo3'
    },
    {
      conteudo: 'Passo informacoes para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quam magna, ullamcorper vel sem sit amet, posuere eleifend sem. Suspendisse potenti. Morbi convallis sed erat a elementum. Maecenas et rhoncus tellus. Pellentesque in feugiat justo. Sed quis tempor mauris. Pellentesque ex dui, rhoncus quis diam quis, rutrum eleifend orci. Donec laoreet risus ut mi ornare dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tortor pulvinar, semper tellus sit amet, convallis elit.',
      autoria: 'Lorem ipsum',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
