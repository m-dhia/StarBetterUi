import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBacheComponent } from '../add-bache/add-bache.component';



interface CardData {
  name: string;
  etat: string;
  
}
@Component({
  selector: 'app-local-bache',
  templateUrl: './local-bache.component.html',
  styleUrls: ['./local-bache.component.css']
})
export class LocalBacheComponent {
  cardData: CardData[] = [
    {
      name: "pompe suppr-01",
      etat: "bd",
      
    },
    {
      name: "pompe suppr-02",
      etat: "on",
      
    },
    {
      name: "pompe suppr-03",
      etat: "off",
      
    },
   
  ];

  constructor(private dialog: MatDialog) {}

  openAddDataFormDialog(): void {
    const dialogRef = this.dialog.open(AddBacheComponent, {
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
