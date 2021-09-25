import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
    CommonModule,
    StoreModule.forFeature("cart", {"cart", cartReducer}),
    EffectsModule.forFeature([CartEffects])
    ]
})

export class SharedStateModule {}