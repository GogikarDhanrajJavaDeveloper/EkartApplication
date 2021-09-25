import { NgHttpLoaderModule } from 'ng-http-loader';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignComponent } from '../sign/sign.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
    declarations: [SignComponent],
    imports: [CommonModule,
    RouterModule.forChild([{path: '', component: SignComponent}]),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()],
    providers: [],
    exports: [SignComponent]
})

export class signModule { }