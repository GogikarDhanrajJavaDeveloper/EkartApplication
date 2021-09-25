import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StripeCreateTokenComponent } from '../payment.component';
import { NgxStripeModule } from 'ngx-stripe';


@NgModule({
    declarations : [StripeCreateTokenComponent],
    imports : [CommonModule,
        RouterModule.forChild([{path:'', component : StripeCreateTokenComponent}]),
        NgxStripeModule.forRoot('pk_test_51JOhfWSGmtrjRSoC3KVO1VXe5HvATBZSVZbZ5twe5a1c6mnzoIUqD4bmAGoDILGAWSvlg39AUDU1ATbVIOaj9hYU005KZKgkZi'),
    ],
    providers : [FormBuilder],
    exports : [StripeCreateTokenComponent]
})
export class PaymentModule {}