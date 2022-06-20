import { Book } from './models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private favBooks = [
    {title: "Humor, Seriously"},
    {title: ":59 Seconds"},
    {title: "The Hero With a Thousand Faces"},
  ];

  getBookList(): Book[] {
    return this.favBooks;
  }

  createBook(bookTitle: string): void {
    if(bookTitle.length !== 0) {
      const bookObject: Book = {title: bookTitle};
      this.favBooks.push(bookObject);
    }
  }

  constructor() { }
}
