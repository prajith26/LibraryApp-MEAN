import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookModel } from '../book.model';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})


export class AddBookComponent implements OnInit {
  // newBook = new BookModel(null,null,null,null,null,null);
  
  bookForm: FormGroup;
  constructor(private BookService:StorageService,public router:Router,public _auth:AuthService,private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.bookForm=this.formBuilder.group({
      title:[''],
      author:[''],
      language:[''],
      genre:[''],
      image:['']
    })
    
  }
  addbook(){
   
    const formData = new FormData();
    formData.append('title',this.bookForm.get('title').value);
    formData.append('author',this.bookForm.get('author').value);
    formData.append('language',this.bookForm.get('language').value);
    formData.append('genre',this.bookForm.get('genre').value);
    formData.append('image',this.bookForm.get('image').value);

    this.BookService.addBooks(formData);
    alert("Book added successfully");
    this.router.navigate(['/books']);
  }
  selectImage(event){
    const file = event.target.files[0];
    this.bookForm.get('image').setValue(file);
    console.log(this.bookForm.value)
  }


}
