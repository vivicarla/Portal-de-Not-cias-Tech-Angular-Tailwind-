import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Tutorial } from './tutorial/tutorial';
import { Sobre } from './sobre/sobre';
import { Documentacao } from './documentacao/documentacao'; 
import { Outro } from './outro/outro';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'tutorial', component: Tutorial },
    { path: 'documentação', component: Documentacao },
    { path: 'sobre', component: Sobre },
    { path: 'outro', component: Outro }
];
