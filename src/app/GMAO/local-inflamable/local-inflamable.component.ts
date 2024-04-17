import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddInfComponent } from '../add-inf/add-inf.component';

interface CardData {
  name: string;
  Etat: string;
  
}
@Component({
  selector: 'app-local-inflamable',
  templateUrl: './local-inflamable.component.html',
  styleUrls: ['./local-inflamable.component.css']
})
export class LocalInflamableComponent {
  cardData: CardData[] = [
    {
      name: "climatiseur",
      Etat: "bd",
      
    },
    {
      name: "eclirage",
      Etat: "on",
      
    },
    {
      name: "risque",
      Etat: "off",
      
    },
   
  ];

  constructor(private dialog: MatDialog) {}

  openAddDataFormDialog(): void {
    const dialogRef = this.dialog.open(AddInfComponent, {
      width: '400px',
      data: {} // You can pass data to the dialog if needed
    });

    // Handle dialog closing and data passing
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        // Add the data to the table if result is not null
        this.cardData.push(result);
      }
    });
  }

  deleteCard(index: number): void {
    this.cardData.splice(index, 1);
  }

}
