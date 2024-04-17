import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-serveur',
  templateUrl: './add-serveur.component.html',
  styleUrls: ['./add-serveur.component.css']
})
export class AddServeurComponent {
  serveurForm!: FormGroup;
  selectedType: string = 'APP';
  idNumber: number = 1;
  minValue: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddServeurComponent>
  ) {
    this.createForm();
  }

  createForm() {
    this.serveurForm = this.formBuilder.group({
      id: ['', Validators.required],
      statut: ['', Validators.required],
      ip: ['', Validators.required],
      dns: ['', Validators.required],
      hostname: ['', Validators.required],
      nature: ['', Validators.required],
      phy_vm: ['', Validators.required],
      prod_int_pca: ['', Validators.required],
      version: ['', Validators.required],
      port: ['', Validators.required],
      path: ['', Validators.required],
      cpu: ['', Validators.required],
      ram: ['', Validators.required],
      disc: ['', Validators.required],
      carte_rsx: ['', Validators.required],
      os: ['', Validators.required],
      services_a_demarrer: ['', Validators.required],
      flux_entrant: ['', Validators.required],
      flux_sortant: ['', Validators.required],
      acces: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.serveurForm.valid) {
      console.log('Form submitted:', this.serveurForm.value);
      this.dialogRef.close(this.serveurForm.value);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onTypeChange() {
    this.minValue = this.selectedType === 'APP' ? 1 :
      this.selectedType === 'BDD' ? 2 :
        this.selectedType === 'ADM' ? 3 : 1000;
    this.idNumber = this.minValue;
  }

  saveServeur() {
    if (this.serveurForm.valid) {
      console.log('Form submitted:', this.serveurForm.value);
      // Perform any action with the form data here, such as saving it to a database
      this.dialogRef.close(this.serveurForm.value);
    }
  }

  newServeur() {
    this.serveurForm.reset();
    this.selectedType = 'APP';
    this.minValue = 1;
    this.idNumber = this.minValue;
  }
}
