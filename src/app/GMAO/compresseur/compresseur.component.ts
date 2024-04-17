// compresseur.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCompresseurComponent } from '../add-compresseur/add-compresseur.component';

interface CardData {
  name: string;
  pression: string;
  temp: string;
}

@Component({
  selector: 'app-compresseur',
  templateUrl: './compresseur.component.html',
  styleUrls: ['./compresseur.component.css']
})
export class CompresseurComponent {
  cardData: CardData[] = [
    {
      name: "DRB_50",
      pression: "bd",
      temp: "bd"
    },
    {
      name: "DRB_40",
      pression: "on",
      temp: "off"
    },
    {
      name: "CSB-01-THT",
      pression: "off",
      temp: "on"
    },
    {
      name: "CSB-02-THT",
      pression: "off",
      temp: "on"
    }
  ];

  constructor(private dialog: MatDialog) {}

  openAddDataFormDialog(): void {
    const dialogRef = this.dialog.open(AddCompresseurComponent, {
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
