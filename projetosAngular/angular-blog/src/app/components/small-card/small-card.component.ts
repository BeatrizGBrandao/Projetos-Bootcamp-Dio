import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
  photoCover: string = "";
  cardTitle: string = "";
  @Input() id: string = "0";
  
  constructor() {  }

  ngOnInit(): void {
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string) {
    const result = dataFake.find(item => item.id === id);

    console.log(result)
    if (result) {
      this.cardTitle = result.title;
      this.photoCover = result.photo;
    }
  }

}
