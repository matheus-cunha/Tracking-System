import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemFrameRoutingModule } from './system-frame-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SystemBodyComponent } from './system-body/system-body.component';
import { DashboardComponent } from './interface/dashboard/dashboard.component';
import { ProjectsComponent } from './interface/projects/projects.component';
import { UsersComponent } from './interface/users/users.component';
import { RegisterComponent } from './interface/register/register.component';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { EmployeesComponent } from './interface/dashboard/charts/employees/employees.component';
import { SpentComponent } from './interface/dashboard/charts/spent/spent.component';
import { RemainComponent } from './interface/dashboard/charts/remain/remain.component';
import { ProjectsChartComponent } from './interface/dashboard/charts/projects-chart/projects-chart.component';
import { MatSelectModule, MatInputModule, MatNativeDateModule, MatDividerModule } from '@angular/material';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ProjectDropdownComponent } from './interface/shared/project-dropdown/project-dropdown.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SystemBodyComponent,
    DashboardComponent,
    ProjectsComponent,
    UsersComponent,
    RegisterComponent,
    EmployeesComponent,
    SpentComponent,
    RemainComponent,
    ProjectsChartComponent,
    ProjectDropdownComponent
  ],
  imports: [
    CommonModule,
    SystemFrameRoutingModule,
    NgxChartsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MatDatepickerModule,
    HttpClientModule
  ],
})
export class SystemFrameModule { }
