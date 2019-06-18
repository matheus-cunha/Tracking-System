import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { remain } from '../../../shared/models/data';
import { BehaviorSubject } from 'rxjs';
import { Remain } from '../../../shared/models/remain-interface';

@Component({
  selector: 'app-remain-chart',
  templateUrl: './remain.component.html',
  styleUrls: ['./remain.component.css']
})

export class RemainComponent implements OnInit, OnChanges {
  @Input() NomeDoProjeto: string;
  remain: Remain[];
  value = new BehaviorSubject<any>(null);
  label = '';

  showLegend = false;
  colorScheme = {domain: ['#427AB6', '#E6E7E8']};
  showLabels = false;
  explodeSlices = true;
  doughnut = true;

  constructor() {
    Object.assign(this, {remain});
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
        this.value.next([this.remain[0].restante, this.remain[0].gastas]);
        this.label = this.remain[0].gastas.value + ' Hrs';
        break;

      case 'Projeto 2':
        this.value.next([this.remain[1].restante, this.remain[1].gastas]);
        this.label = this.remain[1].gastas.value + ' Hrs';
        break;

      case 'Projeto 3':
        this.value.next([this.remain[2].restante, this.remain[2].gastas]);
        this.label = this.remain[2].gastas.value + ' Hrs';
        break;

      case 'Projeto 4':
        this.value.next([this.remain[3].restante, this.remain[3].gastas]);
        this.label = this.remain[3].gastas.value + ' Hrs';
        break;

      default:
        this.value.next([this.remain[0].restante, this.remain[0].gastas]);
        this.label = this.remain[0].gastas.value + ' Hrs';
        break;
    }
  }
}
