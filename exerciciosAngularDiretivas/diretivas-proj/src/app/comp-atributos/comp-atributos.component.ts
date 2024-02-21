import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent implements OnInit {
  estilo: string = "disable"; // Está atrelado às classes css
  corFundo: string = "blue";
  corFonte: string = "brown";

  item: string = "";
  lista: string[] = [];

  isEnableBlock: boolean = true;
  constructor() {

  }
  
  ngOnInit(): void {
  }

  trocarColor() {
    // ngClass

    if(this.estilo === "disable") {
      this.estilo = "enable";
    } else {
      this.estilo = "disable";
    }
  }

  adicionarLita() {
    this.lista.push(this.item);
  }
  

}
