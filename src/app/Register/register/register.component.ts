import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerForm:FormGroup;

  constructor() { 
    this.registerForm = new FormGroup({
      "name": new FormControl("",[Validators.required]),
      "email": new FormControl("",[Validators.required]),
      "password": new FormControl("", [Validators.required]),
      "confirmPassword": new FormControl("",[Validators.required])
    })
  }
    register(){
      console.log(this.registerForm.value);  
    };

}
