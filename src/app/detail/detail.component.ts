import { Store, select } from '@ngrx/store';
import { Spinkit, SpinnerVisibilityService } from 'ng-http-loader';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../detail/model/detail.model';
import { IState } from '../detail/reducer/detail.reducer';
import * as AllAction from '../detail/index';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public message!: Product;
  public loading!: boolean;
  public products!: Product;
  public error!: string;
  public sprinkit = Spinkit;
  public qty!: number;
  public id!: any;

  dropdown_values: number[] = [];

  constructor(private route: ActivatedRoute,
              private spinner: SpinnerVisibilityService,
              private router: Router,
              private store: Store<IState>) {

    console.log(this.route.snapshot.params.id);
  //  this.message = this.route.snapshot.params.id;
    this.qty = 1;
   };

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //dispatch
    this.store.dispatch(new AllAction.ProductsLoading(this.id));

    this.spinner.show();
    let result = this.store.pipe(select(AllAction.allProduct));
    result.subscribe((res) => {
      this.loading = res.loading;
      this.message = res.products;
      this.error = res.error;
      this.dropdown_values = this.createDropDown(this.message.countInStock);
      this.spinner.hide();
    });
  }

  arr: number[] = [];
  createDropDown(count){
    if(count > 0){
      for(let i: number = 1;  i <= count; i++){
        this.arr.push(i);
      }
    }
    return this.arr;
  }

  addToCart(id: any): any{
    this.router.navigate(["/cart", this.qty, id]);
  };
}
