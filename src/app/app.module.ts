import { RouterModule } from '@angular/router';
import { productIntreceptor } from './Home/intreceptor/product.intreceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes/app.routes';
import { RatingComponent } from './common/common.component';
import { RegisterComponent } from './Register/register/register.component';
import { SignComponent } from './sign/sign/sign.component';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS,
    useClass: productIntreceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
