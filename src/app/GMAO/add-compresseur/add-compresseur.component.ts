import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-compresseur',
  templateUrl: './add-compresseur.component.html',
  styleUrls: ['./add-compresseur.component.css']
})
export class AddCompresseurComponent {
  climForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCompresseurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.climForm = this.formBuilder.group({
      name: ['', Validators.required],
      pression: ['', Validators.required],
      temp: ['', Validators.required]
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
