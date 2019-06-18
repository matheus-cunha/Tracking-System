import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { projects } from '../../../shared/models/data';
import { BehaviorSubject } from 'rxjs';
import { Projects } from '../../../shared/models/projects-interface';

@Component({
  selector: 'app-projects-chart',
  templateUrl: './projects-chart.component.html',
  styleUrls: ['./projects-chart.component.css']
})
export class ProjectsChartComponent implements OnInit, OnChanges {
  @Input() NomeDoProjeto: string;
  projects: Projects[];
  value = new BehaviorSubject<any>(null);
  label = '';

  showLegend = false;
  colorScheme = {domain: ['#00A859', '#E6E7E8']};
  showLabels = false;
  explodeSlices = true;
  doughnut = true;

  constructor() {
    Object.assign(this, {projects});
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
        this.value.next([this.projects[0].restante, this.projects[0].gastas]);
        this.label = this.projects[0].restante.value + ' Hrs';
        break;

      case 'Projeto 2':
        this.value.next([this.projects[1].restante, this.projects[1].gastas]);
        this.label = this.projects[1].restante.value + ' Hrs';
        break;

      case 'Projeto 3':
        this.value.next([this.projects[2].restante, this.projects[2].gastas]);
        this.label = this.projects[2].restante.value + ' Hrs';
        break;

      case 'Projeto 4':
        this.value.next([this.projects[3].restante, this.projects[3].gastas]);
        this.label = this.projects[3].restante.value + ' Hrs';
        break;

      default:
        this.value.next([this.projects[0].restante, this.projects[0].gastas]);
        this.label = this.projects[0].restante.value + ' Hrs defaut';
        break;
    }
  }
}
