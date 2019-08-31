import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ScheduleVisitComponent } from '../schedule-visit/schedule-visit.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: { name: string, details: string, image: string, cover: string }[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.products = [
      {
        name: 'Jex Jaxon',
        details: 'One of the best chairs ever created. Truly a masterpiece. Stood the test of time.',
        image: 'analog-art-beautiful-963486.png',
        cover: 'analog-art-beautiful-963486@2x.png'
      },
      {
        name: 'Twist & Shout',
        details: 'A basic yet fancy stool with adjustable height. Simply spin the seat and adjust to your needs.',
        image: 'chair-seat-stool-1701100.png',
        cover: 'chair-seat-stool-1701100@2x.png'
      },
      {
        name: 'Wooden You Know',
        details: 'Contemporary, modern and elegant. This wooden creation is a treat for your seat.',
        image: 'aloe-botany-chair-1029796.png',
        cover: 'aloe-botany-chair-1029796@2x.png'
      },
      {
        name: 'Loner’s Dream',
        details: 'We only made one of these. Going for a staggering $20,000, all proceeds will go to charity.',
        image: 'chair-contemporary-design-1420902.png',
        cover: 'chair-contemporary-design-1420902@2x.png'
      }
    ];
  }

  openDialog(prod): void {
    const dialogRef = this.dialog.open(ScheduleVisitComponent, {
      width: '300px',
      height: '640px',
      data: { product: prod }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
