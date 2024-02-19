import { Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome:string = '';

  constructor() {
    console.log(`Constructor ${this.nome}`);
  }

  ngOnChanges(): void {
    this.nome = this.nome + "*"
    console.log(`OnChange ${this.nome}`);
  }

  ngOnInit(): void {
    console.log(`OnInit ${this.nome}`);
  }
}
