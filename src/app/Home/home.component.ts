  import { Component } from '@angular/core';
import { select,Store } from '@ngrx/store';
import { IState } from './reducer/home.reducer';
import * as allActions from './.';
import { Product } from './model/product.model';
import { Spinkit, SpinnerVisibilityService,  } from 'ng-http-loader';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public message!:any;
  public loading!:boolean;
  public products:Product[];
  public error:string;
  public spinkit = Spinkit;
  constructor(private store:Store<IState>,
              private spinner:SpinnerVisibilityService,
              private sanitizer: DomSanitizer
              ) { 
    this.message = "Products soon from .... state management.";
  }

  ngOnInit()  {
    //dispatch
    this.store.dispatch(new allActions.ProductsLoading());

    //subscription
    this.spinner.show();
    const result = this.store.pipe(select(allActions.allProducts));
    result.subscribe((res)=>{
      this.loading = res.loading;
      this.products = res.products;
      this.error = res.error;
      this.spinner.hide();

    })
  }

}
