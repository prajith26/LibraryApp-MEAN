import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookModel } from '../book.model';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  singleBook:BookModel;
  constructor(private BookService:StorageService,public router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.singleBook=this.BookService.selectedbook;
  }
  deletebook(){
    this.BookService.deleteBook(this.singleBook._id);
    alert("Book deleted");
    this.router.navigate(['/books']);
  }
}

