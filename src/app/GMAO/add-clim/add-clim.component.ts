// add-clim.component.ts
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-clim',
  templateUrl: './add-clim.component.html',
  styleUrls: ['./add-clim.component.css']
})
export class AddClimComponent {
  climForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddClimComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.climForm = this.formBuilder.group({
      name: ['', Validators.required],
      marche: ['', Validators.required],
      soufflage: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.climForm.valid) {
      // You can perform any action with the form data here, such as saving it to a database
      console.log('Form submitted:', this.climForm.value);
      this.dialogRef.close(this.climForm.value);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
