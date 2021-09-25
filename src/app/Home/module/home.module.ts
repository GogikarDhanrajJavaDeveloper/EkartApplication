import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from '../home.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomeEffects } from '../effects/home.effects';
import { HomeReducer } from '../reducer/home.reducer';
import { HttpClientModule } from '@angular/common/http';
import { productService } from '../service/product.service';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { RatingComponent } from '../../common/common.component';

@NgModule({
    declarations: [HomeComponent,
        RatingComponent 
       ],
    imports : [CommonModule, 
               RouterModule.forChild([{path: '', component: HomeComponent}]),
               StoreModule.forRoot({ 'home' : HomeReducer}),
               EffectsModule.forRoot([HomeEffects]),
               HttpClientModule,
               NgHttpLoaderModule.forRoot(),
            ],
    providers: [productService],
    exports : [HomeComponent]
})

export class HomeModule {}