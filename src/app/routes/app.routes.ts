import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: '', loadChildren: () => import('../Home/module/home.module').then(obj => obj.HomeModule)},
    {path: 'detail/:id', loadChildren: () => import('../detail/module/detail.module').then(obj => obj.detailModule)},
    {path: 'payment', loadChildren: () => import('../payment/module/payment.module').then(obj => obj.PaymentModule)},
    {path: 'cart', loadChildren: () => import('../cart/module/cart.module').then(obj => obj.cartModule)},
    {path: 'register', loadChildren: () => import('../Register/module/register.module').then(obj => obj.registerModule)},
    {path: 'sign', loadChildren: () => import('../sign/module/sign.module').then(obj => obj.signModule)}
]; 