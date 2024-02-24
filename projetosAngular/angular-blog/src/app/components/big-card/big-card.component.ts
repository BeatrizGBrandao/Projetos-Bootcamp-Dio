import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';


@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  photoCover: string = "";
  cardTitle: string = "";
  cardDescription: string = "";
  @Input() id: string = "0";
  
  constructor() {
  }
  ngOnInit(): void {
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string) {
    const result = dataFake.find(item => item.id === id);

    console.log(result)
    if (result) {
      this.cardTitle = result.title;
      this.cardDescription = result.description;
      this.photoCover = result.photo;
    }
    
  }

}
