import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit{
  produtos: string[] = []
  menuType: string = ""

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "carregador"
    ]
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  adicionar() { // Reatividade
    this.produtos.push("bia");
    // this.produtos.pop();
  }

  remover(index: number) {
    this.produtos.splice(index, 1);
  }

}
