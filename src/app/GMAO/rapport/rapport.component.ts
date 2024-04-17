import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UrRapportComponent } from '../ur-rapport/ur-rapport.component';

export interface PeriodicElement {
    Date: string;
    num: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { num: 1, Date: '19/05/2024' },
    { num: 2, Date: '10/03/2024' },
    { num: 3, Date: '12/05/2024' },
    { num: 4, Date: '18/19/2024' },
    { num: 5, Date: '24/06/2015' },
    { num: 6, Date: '29/08/2024' },
    { num: 7, Date: '6/08/2024' },
    { num: 8, Date: '2/6/2024' },
    { num: 9, Date: '4/9/2024' },
    { num: 10, Date: '28/7/2024' },
];

@Component({
    selector: 'app-rapport',
    templateUrl: './rapport.component.html',
    styleUrls: ['./rapport.component.css']
})
export class RapportComponent {
    values = '';
    displayedColumns: string[] = ['numero', 'date', 'affiche', 'download'];
    dataSource = ELEMENT_DATA;

    get filteredDataSource(): PeriodicElement[] {
        if (!this.values.trim()) {
            return this.dataSource;
        }
        return this.dataSource.filter(element => element.Date.toLowerCase().includes(this.values.trim().toLowerCase()));
    }
    constructor(public dialog: MatDialog) {}

    openUrRapportDialog(): void {
        const dialogRef = this.dialog.open(UrRapportComponent, {
            width: '250px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
