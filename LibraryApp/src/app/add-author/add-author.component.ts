import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorModel } from '../author.model';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  // newAuthor = new AuthorModel(null,null,null,null,null,null);
  authorForm: FormGroup;
  constructor(private authorService:StorageService,public router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.authorForm=this.formBuilder.group({
      name:[''],
      nationality:[''],
      genre:[''],
      works:[''],
      image:['']
    })
  }
  addAuthor(){

    const formData = new FormData();
    formData.append('name',this.authorForm.get('name').value);
    formData.append('nationality',this.authorForm.get('nationality').value);
    formData.append('genre',this.authorForm.get('genre').value);
    formData.append('works',this.authorForm.get('works').value);
    formData.append('image',this.authorForm.get('image').value);

    this.authorService.addAuthors(formData);
    alert("Author added successfully");
    this.router.navigate(['/authors']);
    
  }

  selectImage(event){
    const file = event.target.files[0];
    this.authorForm.get('image').setValue(file);
    console.log(this.authorForm.value);
  }
}
