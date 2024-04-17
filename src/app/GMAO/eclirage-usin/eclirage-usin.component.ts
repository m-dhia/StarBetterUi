import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AddEclirageComponent } from '../add-eclirage/add-eclirage.component';



interface CardData {
  name: string;
  etat: string;
  
}
@Component({
  selector: 'app-eclirage-usin',
  templateUrl: './eclirage-usin.component.html',
  styleUrls: ['./eclirage-usin.component.css']
})
export class EclirageUsinComponent {
  cardData: CardData[] = [
    {
      name: "eclirage-usin",
      etat: "bd",
      
    },
   
   
  ];

  constructor(private dialog: MatDialog) {}

  openAddDataFormDialog(): void {
    const dialogRef = this.dialog.open(AddEclirageComponent, {
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
