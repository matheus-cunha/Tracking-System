import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { spent } from '../../../shared/models/data';
import { BehaviorSubject } from 'rxjs';
import { Spent } from '../../../shared/models/spent-interface';

@Component({
  selector: 'app-spent-chart',
  templateUrl: './spent.component.html',
  styleUrls: ['./spent.component.css']
})

export class SpentComponent implements OnInit, OnChanges {
  @Input() NomeDoProjeto: string;
  spent: Spent[];
  value = new BehaviorSubject<any>(null);
  label = '';

  showLegend = false;
  colorScheme = {domain: ['#ED3237', '#E6E7E8']};
  showLabels = false;
  explodeSlices = true;
  doughnut = true;

  constructor() {
    Object.assign(this, {spent});
  }

  ngOnInit() {
    this.ShowResults();
  }

  ngOnChanges() {
    this.ShowResults();
  }

  ShowResults() {
    switch (this.NomeDoProjeto) {
      case 'Projeto 1':
        this.value.next([this.spent[0].restante, this.spent[0].gastas]);
        this.label = this.spent[0].restante.value + ' Hrs';
        break;

      case 'Projeto 2':
        this.value.next([this.spent[1].restante, this.spent[1].gastas]);
        this.label = this.spent[1].restante.value + ' Hrs';
        break;

      case 'Projeto 3':
        this.value.next([this.spent[2].restante, this.spent[2].gastas]);
        this.label = this.spent[2].restante.value + ' Hrs';
        break;

      case 'Projeto 4':
        this.value.next([this.spent[3].restante, this.spent[3].gastas]);
        this.label = this.spent[3].restante.value + ' Hrs';
        break;

      default:
        this.value.next([this.spent[0].restante, this.spent[0].gastas]);
        this.label = this.spent[0].restante.value + ' Hrs Defaut';
        break;
    }
  }
}
