import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class RatingComponent {
@Input() rating_value;
@Input() numReviews;

  constructor() {
    console.log('happy coding');
   }

}
