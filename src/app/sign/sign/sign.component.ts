import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  public userDetails: FormGroup;
  constructor() { 
    this.userDetails = new FormGroup({
      "email": new FormControl("", [Validators.required]),
      "password": new FormControl("",[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.userDetails.value);
  }
}
