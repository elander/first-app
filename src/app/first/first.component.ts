import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title = 'My First Component!';
  isVisible = false;
  personList = ['Max', 'Anders', 'Can', 'Edgars', 'Toms', 'Julia'];
  
  onClick() {
    console.log('I was clicked!');
    this.isVisible = !this.isVisible;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
