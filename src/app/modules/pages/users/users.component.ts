import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ModalAlertComponent } from 'src/app/shared/components/modal-alert/modal-alert.component';
import { TableModel } from 'src/app/shared/components/table/models/columns';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  columns: TableModel[] = [];
  rowData: any[] = [];
  loading = true;

  constructor(private dialagoService: NbDialogService) {}

  ngOnInit(): void {
    this.columns = [
      { header: 'Name', field: 'name', type: 'string' },
      { header: 'Age', field: 'age', type: 'date' },
      { header: 'Email', field: 'email', type: 'currency' },
      { header: '', field: '', actions: true, actionType: 'edit' },
      { header: '', field: '', actions: true, actionType: 'delete' }
    ];

    // Simulação de carregamento de dados (por exemplo, de uma API)
    setTimeout(() => {
      this.rowData = [
        { name: 'Mark', age: new Date(), email: 29999 },
        { name: 'Anna', age: new Date(), email: 1000},
        { name: 'John', age: new Date(), email: 90 }
      ];
      this.loading = false;
    }, 1000); // Simulando 1 segundo de carregamento
  }

  edit(event: any): void {
    console.log(event);
  }

  delet(event: any): void {
    this.openModalConfirm();
  }

  openModalConfirm(): void {
    this.dialagoService
    .open(ModalAlertComponent, {
      context: {
        type: 'delete'
      },
    })
    .onClose.subscribe((result: boolean) => {
      if (result) {
      }
    });
  }
}
