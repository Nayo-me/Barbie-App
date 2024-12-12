import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClothModalComponent } from '../cloth-modal/cloth-modal.component';

@Component({
  selector: 'app-clothing-store',
  templateUrl: './clothing-store.component.html',
  styleUrls: ['./clothing-store.component.css']
})
export class ClothingStoreComponent {
  private isModalOpen = false; // Track whether a modal is open
  private currentOpenedClothIndex: number | null = null; // Track the index of the currently opened cloth


  constructor(private matDialog: MatDialog) {}

  cloths: any[] = [
    { imgurl:'./assets/clothing/da.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/db.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dc.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dd.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dh.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/de.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dg.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/di.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dj.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dk.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dl.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dm.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/do.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dp.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dq.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dr.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/ds.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dt.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dx.png',  name:'a',size:'S, M, L, XL',price:'10'},
    { imgurl:'./assets/clothing/dz.png',  name:'a',size:'S, M, L, XL',price:'10'},
  ];
  
  clothsModal(selectedCloth: string, name: string, size: string, price: number, index: number) {
    if (this.isModalOpen) {
      return; // Prevent opening a new modal if one is already open
    }

    this.isModalOpen = true; // Set modal state to open

       // Set the index of the currently opened cloth
       this.currentOpenedClothIndex = index;

    const dialogRef = this.matDialog.open(ClothModalComponent, {
      width: '80%',
      data: {
        imgurl: selectedCloth,
        name: name,
        size: size,
        price: price
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.isModalOpen = false; // Reset modal state when it's closed
    });
  }

  // Getter to check if a cloth is currently opened
  isClothOpen(index: number): boolean {
    return this.currentOpenedClothIndex === index;
  }

}
