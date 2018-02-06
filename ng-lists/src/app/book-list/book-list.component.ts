import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [ BookService ]
})
export class BookListComponent implements OnInit {
  books: Book[] = new Array<Book>();
  constructor( private bookService: BookService) {
    this.books = this.getBooks();
  }

  ngOnInit() {
    console.log(this.books);
  }
  getBooks():Book[] {
    const arr: Book[] = [];
    this.bookService.getBookData()
    .subscribe(function(rdata) {
      const data: any = rdata;
      data.forEach(book => {
        console.log(book);
        const newbook: Book = {};
        newbook.title = book.title;
        newbook.description = book.description;
        newbook.cover = book.cover;
        newbook.favourite = book.favourite;
        arr.push(newbook);
      });
      }, (err) => {
        console.log(err);
    });
    return arr;
  }
  toggleFavourite(book: Book) {
    console.log(this.books);
    book.favourite = !book.favourite;
  }

}
