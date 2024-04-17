import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddServeurComponent } from '../add-serveur/add-serveur.component';

interface CardData {
  name: string;
  marche: string;
  soufflage: string;
}

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.css']
})
export class ServeurComponent  {
  
  cardData: CardData[] = [
    {
      name: "Clim-THT_01",
      marche: "bd",
      soufflage: "bd"
    },
    {
      name: "Clim-THT_02",
      marche: "on",
      soufflage: "off"
    },
    {
      name: "Clim-THT_03",
      marche: "off",
      soufflage: "on"
    },
    {
      name: "Clim-RoofTop_CMS_01",
      marche: "on",
      soufflage: "off"
    },
    {
      name: "Clim-RoofTop_CMS_02",
      marche: "on",
      soufflage: "off"
    },
    {
      name: "Clim-RoofTop_CMS_02",
      marche: "on",
      soufflage: "off"
    },
    {
      name: "Clim-RoofTop_CMS_03",
      marche: "on",
      soufflage: "off"
    },
    {
      name: "Clim-RoofTop_CMS_04",
      marche: "on",
      soufflage: "off"
    },
    {
      name: "Clim-RoofTop_THT_07",
      marche: "on",
      soufflage: "off"
    },
    {
      name: "Clim-RoofTop_THT_06",
      marche: "on",
      soufflage: "off"
    },
    {
      name: "Clim-split_01",
      marche: "on",
      soufflage: "off"
    },
    {
      name: "Clim-split_02",
      marche: "on",
      soufflage: "off"
    },
    {
      name: "Clim-Admninistration",
      marche: "on",
      soufflage: "off"
    },
    
  ];

  constructor(private dialog: MatDialog) {}

  openAddDataFormDialog(): void {
    const dialogRef = this.dialog.open(AddServeurComponent, {
      width: 'auto',
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
