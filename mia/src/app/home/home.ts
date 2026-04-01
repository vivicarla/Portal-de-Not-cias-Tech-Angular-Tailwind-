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
      coisa:'Programador Cerebral',
      descricao:'Programador sofre de perda de movimento dos braços e médicos conseguem restaurar a função usando um implante cerebral inovador. O implante, que se conecta diretamente ao cérebro, permite que o programador controle um braço robótico com seus pensamentos, devolvendo-lhe a capacidade de realizar tarefas diárias e melhorar sua qualidade de vida.',
      imagem: 'https://media.licdn.com/dms/image/v2/C4E12AQG4YIGCSs3oww/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1608140711251?e=2147483647&v=beta&t=z4kJ0md0jRBELgGsquqxDqdzddR_C0GKmd5BD7_Dwwc'
    },
    {
      coisa:'Programa Bomba',
      descricao:'Erro no código de programador causa explosão em laboratório de pesquisa. O incidente ocorreu quando o programador estava testando um novo software de controle para um experimento científico. O erro no código resultou em uma falha catastrófica, levando a uma explosão que causou a criação de uma arma biológica.',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnmC2hDc-yaVmeoBlIgwC4D9LHP0WGxKMbg&s'
    },
    {
      coisa:'IA Psicopata',
      descricao:'Empresa lança nova tecnologia de realidade virtual para treinamento de funcionários. A IA faz uma espécie de "jogos vorazes" com seus novos contratantes e resulta em danos físicos e psicológicos graves aos seus empregadores, até mesmo a morte.',
      imagem: 'https://c.files.bbci.co.uk/8C65/production/_124314953_7ffe811c-b776-464c-96e1-d0e9ddb50f99.jpg'
    }
  ];
}

