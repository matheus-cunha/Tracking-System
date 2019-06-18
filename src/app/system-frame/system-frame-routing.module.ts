import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemBodyComponent } from './system-body/system-body.component';
import { DashboardComponent } from './interface/dashboard/dashboard.component';
import { ProjectsComponent } from './interface/projects/projects.component';
import { RegisterComponent } from './interface/register/register.component';
import { UsersComponent } from './interface/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: SystemBodyComponent
  },
  {
    path: '',
    component: DashboardComponent,
    outlet: 'content'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    outlet: 'content'
  },  
  {
    path: 'projects',
    component: ProjectsComponent,
    outlet: 'content'
  },
  {
    path: 'register',
    component: RegisterComponent,
    outlet: 'content'
  },
  {
    path: 'users',
    component: UsersComponent,
    outlet: 'content'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemFrameRoutingModule { }
