import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {CartComponent} from './components/shopping-cart/cart/cart.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
    {path: 'shop', component: ShoppingCartComponent },
    { path: '', component: ShoppingCartComponent },
    { path: 'cart', component: CartComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {

}
