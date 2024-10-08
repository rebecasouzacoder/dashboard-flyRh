import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NbDialogModule, NbMenuModule, NbSidebarModule, NbToastrModule, NbToastrService } from '@nebular/theme';
import { PagesComponent } from './pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './users/users.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacanciesTypeComponent } from './vacancies-type/vacancies-type.component';


@NgModule({
  declarations: [
    PagesComponent,
    UsersComponent,
    VacanciesComponent,
    VacanciesTypeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    SharedModule
  ],
  providers: [
    NbToastrService
  ]
})
export class PagesModule { }
