import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simple-form',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Here we are implementing the submitForm function. All we are doing for right now is spitting out the details of the form to our console.
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }

}
