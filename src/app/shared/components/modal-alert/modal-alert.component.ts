import { Component } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrl: './modal-alert.component.scss'
})
export class ModalAlertComponent {
type: 'delete';
  constructor(protected dialogRef: NbDialogRef<ModalAlertComponent>) {
  }
}
