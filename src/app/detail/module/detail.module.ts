import { NgHttpLoaderModule } from 'ng-http-loader';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailComponent } from '../detail.component';
import { DetailReducer } from '../reducer/detail.reducer';
import { detailEffects } from '../effects/detail.effects';
import { productDetailService } from '../service/detail.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations : [DetailComponent],
    imports : [CommonModule,
        RouterModule.forChild([{path: '', component: DetailComponent}]),
        StoreModule.forRoot({' detail ': DetailReducer}),
        EffectsModule.forRoot([detailEffects]),
        HttpClientModule,
        NgHttpLoaderModule.forRoot(),
        FormsModule
    ],
    providers : [productDetailService],
    exports: [DetailComponent]
})
export class detailModule {}