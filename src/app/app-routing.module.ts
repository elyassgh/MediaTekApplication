import { NgModule } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StoreComponent} from './store/store.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [
  { path : 'home' , component: HomeComponent},
  { path : 'store', component: StoreComponent},
  { path : 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
