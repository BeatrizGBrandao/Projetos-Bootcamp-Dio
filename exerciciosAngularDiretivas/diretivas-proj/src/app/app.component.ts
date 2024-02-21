import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "./card/card.component";
import { CompAtributosComponent } from "./comp-atributos/comp-atributos.component";

import {ListaModule} from './lista/lista.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FormsModule, CardComponent, CompAtributosComponent, ListaModule]
})
export class AppComponent {
  title = 'diretivas-proj';
  isAliveCard = true;
}

export {FormsModule};
