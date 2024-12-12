import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ClothingStoreComponent } from './clothing-store/clothing-store.component';
import { AccessoriesStoreComponent } from './accessories-store/accessories-store.component';
import { ClothModalComponent } from './cloth-modal/cloth-modal.component';
const routes: Routes = [
  {
    path:'shop',
    component:ShoppingComponent,
    data:{
      title:'',
      pageTitle:'Shop'
    }
  },
  {
    path:'',
    component:HomeComponent,
    data:{
      title:'',
      pageTitle:'Home'
    }
  },
  {
    path:'shop/clothingStore',
    component:ClothingStoreComponent,
    data:{
      title:'',
      pageTitle:'Clothing Store'
    }
  },

  {
    path:'shop/accessoriesStore',
    component:AccessoriesStoreComponent,
    data:{
      title:'',
      pageTitle:'Accessories Store'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
