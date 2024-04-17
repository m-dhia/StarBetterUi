import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-ur-rapport',
  templateUrl: './ur-rapport.component.html',
  styleUrls: ['./ur-rapport.component.css']
})
export class UrRapportComponent {
  constructor(public dialogRef: MatDialogRef<UrRapportComponent>) {}

    closeDialog(): void {
        this.dialogRef.close();
    }

}
