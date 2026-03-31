import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao = [
    {
      noticia:'Programador Cerebral',
      descricao:'Programador sofre de perda de movimento dos braços e médicos conseguem restaurar a função usando um implante cerebral inovador. O implante, que se conecta diretamente ao cérebro, permite que o programador controle um braço robótico com seus pensamentos, devolvendo-lhe a capacidade de realizar tarefas diárias e melhorar sua qualidade de vida.',
    },
    {
      noticia:'Programa Bomba',
      descricao:'Erro no código de programador causa explosão em laboratório de pesquisa. O incidente ocorreu quando o programador estava testando um novo software de controle para um experimento científico. O erro no código resultou em uma falha catastrófica, levando a uma explosão que causou a criação de uma arma biológica.',
    },
    {
      noticia:'IA Psicopata',
      descricao:'Empresa lança nova tecnologia de realidade virtual para treinamento de funcionários. A IA faz uma espécie de "jogos vorazes" com seus novos contratantes e resulta em danos físicos e psicológicos graves aos seus empregadores, até mesmo a morte.',
    }
  ];
}

