import { Injectable } from '@angular/core';
import { BookModel } from './book.model';
import { AuthorModel } from './author.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// let authorID;
//   let bookID;
export class StorageService {
  selectedauthor:AuthorModel;
  selectedbook:BookModel;
  
  constructor(private _http: HttpClient) { }
  getBooks(){
    console.log("hi")
    return this._http.get("http://localhost:5000/books");
  }
  getAuthors(){
    // console.log("hi")
    return this._http.get("http://localhost:5000/authors");
  }

  addAuthors(formData){
    return this._http.post("http://localhost:5000/addAuthor",formData)
    .subscribe(data=>{console.log(data)})
  }
  addBooks(formData){
    // console.log(item.image)
    return this._http.post("http://localhost:5000/addBook",formData)
    .subscribe(data=>{console.log(data)})
  }

  updateAuthor(formData){
    return this._http.put("http://localhost:5000/updateAuthor/"+this.selectedauthor._id,formData)
    .subscribe(data=>{console.log(data)})
  }
  updateBook(formData){
    const URL = "http://localhost:5000/updateBook/"+this.selectedbook._id;
    console.log(URL)
    return this._http.put(URL,formData)
    .subscribe(data=>{console.log(data)})
  }

  deleteAuthor(id:String){
    return this._http.delete("http://localhost:5000/deleteAuthor/"+id)
    .subscribe(data=>{console.log(data)});
  }
  deleteBook(id:String){
    return this._http.delete("http://localhost:5000/deleteBook/"+id)
    .subscribe(data=>{console.log(data)});
  }

}
