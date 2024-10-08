import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { TableModel } from './models/columns';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columns: TableModel[] = [];
  @Input() loading: boolean;
  @Input() empty: boolean;
  @Input() rowData: any[] = [];
  @Output() editEvent: EventEmitter<any> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  formatField(value: any, type: string): any {
    switch (type) {
      case 'currency':
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value); // Formato monetário simples
      case 'date':
        return new Date(value).toLocaleDateString(); // Formato de data// Email com link
      default:
        return value; // Formato padrão para strings
    }
  }
}
