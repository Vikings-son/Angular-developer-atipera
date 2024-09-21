import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from '../periodic-element.model';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialog {
  constructor(
    public dialogRef: MatDialogRef<EditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.data);
  }
}
