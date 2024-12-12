import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccessoryModalComponent } from '../accessory-modal/accessory-modal.component';

@Component({
  selector: 'app-accessories-store',
  templateUrl: './accessories-store.component.html',
  styleUrls: ['./accessories-store.component.css']
})
export class AccessoriesStoreComponent {

  private isModalOpen = false; // Track whether a modal is open
  private currentOpenedAccessoryIndex: number | null = null; // Track the index of the currently opened cloth

  constructor(private matDialog: MatDialog) {}

  accessories: any[] = [
    {imgurl: './assets/accessories/ca.png', name:'a', color:'White, Pink, Magenta, Red', price:'10'},
    {imgurl:'./assets/accessories/cb.png', name:'b', color:'White, Pink, Magenta, Red', price:'10'},
    {imgurl:'./assets/accessories/cc.png', name:'c', color:'White, Pink, Magenta, Red', price:'10'},
    {imgurl:'./assets/accessories/cd.png', name:'d', color:'White, Pink, Magenta, Red', price:'10'},
    {imgurl:'./assets/accessories/ce.png', name:'e', color:'White, Pink, Magenta, Red', price:'10'},
    {imgurl:'./assets/accessories/cf.png', name:'f', color:'White, Pink, Magenta, Red', price:'10'},
    {imgurl:'./assets/accessories/cg.png', name:'g', color:'White, Pink, Magenta, Red', price:'10'},
    {imgurl:'./assets/accessories/ch.png', name:'h', color:'White, Pink, Magenta, Red', price:'10'},
    {imgurl:'./assets/accessories/cj.png', name:'j', color:'White, Pink, Magenta, Red', price:'10'},
    {imgurl:'./assets/accessories/ck.png', name:'k', color:'White, Pink, Magenta, Red', price:'10'},
    {imgurl:'./assets/accessories/cm.png', name:'m', color:'White, Pink, Magenta, Red', price:'10'},
    {imgurl:'./assets/accessories/cu.png', name:'u', color:'White, Pink, Magenta, Red', price:'10'},
  ];

  accessoriesModal(selectedCloth: string, name: string, color: string, price: number, index: number) {
    if (this.isModalOpen) {
      return; // Prevent opening a new modal if one is already open
    }

    this.isModalOpen = true; // Set modal state to open

       // Set the index of the currently opened cloth
       this.currentOpenedAccessoryIndex = index;

    const dialogRef = this.matDialog.open(AccessoryModalComponent, {
      width: '80%',
      data: {
        imgurl: selectedCloth,
        name: name,
        color: color,
        price: price
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.isModalOpen = false; // Reset modal state when it's closed
    });
  }

  // Getter to check if a cloth is currently opened
  isAccessoryOpen(index: number): boolean {
    return this.currentOpenedAccessoryIndex === index;
  }
}
