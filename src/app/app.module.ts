import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbContextMenuModule, NbActionsModule, NbMenuModule, NbSidebarService, NbIconModule } from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/br';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');
localePt[8] = 0; // Forces the first day of week to be Sunday
registerLocaleData(localePt, 'pt');
registerLocaleData(localeBr);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbIconModule,
  ],
  providers: [
    NbSidebarService,
     { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
