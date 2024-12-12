import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-cloth-modal',
  templateUrl: './cloth-modal.component.html'  ,
  styleUrls: ['./cloth-modal.component.css']
})
export class ClothModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ClothModalComponent>
  ) {} 

  closeDialog() {
    this.dialogRef.close();
  }
}
