import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UsersComponent } from './users/users.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacanciesTypeComponent } from './vacancies-type/vacancies-type.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'usuarios',
        component: UsersComponent
      },
      {
        path: 'vagas',
        component: VacanciesComponent
      },
      {
        path: 'tipo-vagas',
        component: VacanciesTypeComponent
      },
      { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
