import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookModel } from '../book.model';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent implements OnInit {
  // upBook=new BookModel(null,null,null,null,null,null);
  
  constructor(private BookService:StorageService,public router:Router,private formBuilder:FormBuilder) { }
  upBookForm: FormGroup =this.formBuilder.group({
    id:[''],
    title:[''],
    author:[''],
    language:[''],
    genre:[''],
    image:['']
  })
  
  ngOnInit(): void {
    if (this.BookService.selectedbook != undefined){
      // this.upBook=this.BookService.selectedbook;
      this.upBookForm.setValue({
        id:this.BookService.selectedbook._id,
        title:this.BookService.selectedbook.title,
        author:this.BookService.selectedbook.author,
        language:this.BookService.selectedbook.language,
        genre:this.BookService.selectedbook.genre,
        image:this.BookService.selectedbook.image
        })
    }
     
  }
  updatebook(){

    const formData = new FormData();
    formData.append('_id',this.BookService.selectedbook._id);
    formData.append('title',this.upBookForm.get('title').value);
    formData.append('author',this.upBookForm.get('author').value);
    formData.append('language',this.upBookForm.get('language').value);
    formData.append('genre',this.upBookForm.get('genre').value);
    formData.append('image',this.upBookForm.get('image').value);
    console.log(this.BookService.selectedbook._id);
    this.BookService.updateBook(formData);
    alert("Book updated Successfully");
    this.router.navigate(['/books']);
  }

  selectImage(event){
    const file = event.target.files[0];
    this.upBookForm.get('image').setValue(file);
    console.log(this.upBookForm.value);
  }

}
