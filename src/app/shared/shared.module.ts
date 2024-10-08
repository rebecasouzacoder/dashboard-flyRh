import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule,
  NbActionsModule,
  NbContextMenuModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbButtonModule,
  NbSidebarModule,
  NbSelectModule,
  NbAccordionModule,
  NbIconModule,
  NbAlertModule,
  NbCheckboxModule,
  NbUserModule,
  NbSpinnerModule,
  NbFormFieldModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';


const modules = [
  CommonModule,
  NbCardModule,
  NbLayoutModule,
  NbActionsModule,
  NbContextMenuModule,
  NbInputModule,
  NbTabsetModule,
  NbButtonModule,
  NbSidebarModule,
  FormsModule,
  ReactiveFormsModule,
  NbSelectModule,
  NbAccordionModule,
  NbEvaIconsModule,
  NbIconModule,
  NgxSkeletonLoaderModule,
  NbAlertModule,
  AngularEditorModule,
  HttpClientModule,
  NbCheckboxModule,
  NbUserModule,
  NbContextMenuModule,
  NbSpinnerModule,
  NbFormFieldModule,
];

const components = [
  TableComponent,
  CardContainerComponent,
  ModalAlertComponent
];


@NgModule({
  imports: [...modules],
  exports: [
    ...modules,
    ...components
  ],
  declarations: [
    ...components
  ],
})
export class SharedModule {}
