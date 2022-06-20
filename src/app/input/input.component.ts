import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() newBookEvent = new EventEmitter<string>();
  @ViewChild('titleInput')
  titleInputReference!: ElementRef;
  bookTitle: string = '';

  onAddBook() {
    this.bookTitle = this.titleInputReference.nativeElement.value;
    console.log('book is: ', this.bookTitle);
    this.newBookEvent.emit(this.bookTitle);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
