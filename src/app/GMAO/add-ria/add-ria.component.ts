import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-ria',
  templateUrl: './add-ria.component.html',
  styleUrls: ['./add-ria.component.css']
})
export class AddRiaComponent {
  climForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddRiaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.climForm = this.formBuilder.group({
      name: ['', Validators.required],
      pression: ['', Validators.required],
      
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
