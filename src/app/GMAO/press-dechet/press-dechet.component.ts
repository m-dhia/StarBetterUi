import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AddPressDechetComponent } from '../add-press-dechet/add-press-dechet.component';



interface CardData {
  name: string;
  etat: string;
  
}

@Component({
  selector: 'app-press-dechet',
  templateUrl: './press-dechet.component.html',
  styleUrls: ['./press-dechet.component.css']
})
export class PressDechetComponent {
  cardData: CardData[] = [
    {
      name: "press-dechet-01",
      etat: "bd",
      
    },
    {
      name: "press-dechet-02",
      etat: "on",
      
    }
   
  ];

  constructor(private dialog: MatDialog) {}

  openAddDataFormDialog(): void {
    const dialogRef = this.dialog.open(AddPressDechetComponent, {
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
