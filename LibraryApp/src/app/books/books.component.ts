import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookModel } from '../book.model';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:BookModel[];
  constructor(private Books:StorageService,public router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.getbooks();
    // console.log(this.books)
  }
  
  getbooks(){
    this.Books.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data))
    })

    console.log(this._auth.getAdmin);
    console.log(this._auth.loggedIn);

  }
  viewBook(book){
    this.Books.selectedbook=book;
    console.log(this.Books.selectedbook);
    this.router.navigate(['/book']);
  }

}
