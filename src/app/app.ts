import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './componentes/cabecera/cabecera';
import { PiePagina } from './componentes/pie-pagina/pie-pagina';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cabecera, PiePagina],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'mi-mascota-angular';
}