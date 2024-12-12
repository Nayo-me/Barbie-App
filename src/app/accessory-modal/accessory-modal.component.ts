import { Component, Inject } from '@angular/core'; // Added @Inject import
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-accessory-modal',
  templateUrl: './accessory-modal.component.html',
  styleUrls: ['./accessory-modal.component.css']
})
export class AccessoryModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // @Inject is required to use MAT_DIALOG_DATA
    private dialogRef: MatDialogRef<AccessoryModalComponent> // Reference to the dialog
  ) {}

  // Method to close the dialog
  closeDialog() {
    this.dialogRef.close();
  }
}
