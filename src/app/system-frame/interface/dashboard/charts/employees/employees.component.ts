import { Component } from '@angular/core';
import { employees } from '../../../shared/models/data';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  constructor() {
    Object.assign(this, {employees});
  }

  employees: any[];
  legend = 'Legenda';
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Horas';
  showYAxisLabel = true;
  yAxisLabel = 'Funcionário';
  TrimXaxis = false;
  TrimYaxis = false;
  colorScheme = {domain: ['#427ab6', '#42B66F', '#9C0000']};

}
