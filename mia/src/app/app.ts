import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Documentacao } from './documentacao/documentacao';
import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Tutorial } from './tutorial/tutorial';
import { Header } from './meu/header/header';
import { Footer } from './meu/footer/footer';
import { Outro } from './outro/outro';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet, Home, Tutorial, Sobre, Documentacao, Header, Footer, Outro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mia');
}
