import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './../register/register.component';
import { NgModule} from '@angular/core';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
    declarations: [RegisterComponent],
    imports: [CommonModule,RouterModule.forChild([{path:'', component: RegisterComponent}]),
              HttpClientModule,
            NgHttpLoaderModule.forRoot(),
            FormsModule,
        ReactiveFormsModule],
    providers: [],
    exports: [RegisterComponent]
})

export class registerModule { }