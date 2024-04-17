import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddRiaComponent } from '../add-ria/add-ria.component';

interface CardData {
  name: string;
  pression: string;
  
}

@Component({
  selector: 'app-ria',
  templateUrl: './ria.component.html',
  styleUrls: ['./ria.component.css']
})
export class RIAComponent {
  cardData: CardData[] = [
    {
      name: "RIA-Déchet",
      pression: "bd",
      
    },
    {
      name: "RIA-CMS",
      pression: "on",
      
    },
    {
      name: "RIA-THT",
      pression: "off",
      
    },
    {
      name: "RIA-Magasin",
      pression: "off"
    }
  ];

  constructor(private dialog: MatDialog) {}

  openAddDataFormDialog(): void {
    const dialogRef = this.dialog.open(AddRiaComponent, {
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
