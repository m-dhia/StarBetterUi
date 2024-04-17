import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-press-dechet',
  templateUrl: './add-press-dechet.component.html',
  styleUrls: ['./add-press-dechet.component.css']
})
export class AddPressDechetComponent {

  climForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddPressDechetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.climForm = this.formBuilder.group({
      name: ['', Validators.required],
      etat: ['', Validators.required],
      
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
