import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingComponent } from '../common/common.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [RatingComponent]

})

export class sharedModule {}