import { Component, Input, OnInit } from '@angular/core';

import { Book } from '../models';
import { BookService } from '../book.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  // @Input() bookList: Book[] = [];
  title = 'My First Component!';
  isVisible = false;
  personList = ['Max', 'Anders', 'Can', 'Edgars', 'Toms', 'Julia'];
  bookList: Book[] = [];


  onClick() {
    console.log('I was clicked!');
    this.isVisible = !this.isVisible;
  }



  constructor(private externalService: BookService ) { }

  addBook(bookTitle: string) {
    this.externalService.createBook(bookTitle);
  }

  ngOnInit(): void {
    this.bookList = this.externalService.getBookList();
  }

}
