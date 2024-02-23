import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private navegador: Router) {

    // https://localhost:4200/portfolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    ) // Estou olhando para a nossa rota e para o seu primeiro filho

    // http://localhost:4200/portfolio/1?{name=felipe&idade=19}
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }
  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate(['/']);
    // }, 5000)
  }
  // Depois que entrar na página, ele vai ser forçado/redirecionado para a /
}
