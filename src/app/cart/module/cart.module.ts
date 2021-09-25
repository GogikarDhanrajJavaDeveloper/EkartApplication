import { NgHttpLoaderModule } from 'ng-http-loader';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartComponent } from '../cart.component';
import CartService from '../service/cart.service';
@NgModule({
    declarations: [CartComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: CartComponent}]),
        HttpClientModule,
        StoreModule,
        EffectsModule,
        NgHttpLoaderModule
    ],
    providers: [CartService],
    exports: [CartComponent]
})

export class cartModule {}