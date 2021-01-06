import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorModel } from '../author.model';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  // upAuthor=new AuthorModel(null,null,null,null,null,null);
  // upAuthorForm : FormGroup;
  constructor(private AuthorService:StorageService,public router:Router,private formBuilder:FormBuilder) { }
  upAuthorForm : FormGroup = this.formBuilder.group({
      id:[''],
      name:[''],
      nationality:[''],
      genre:[''],
      works:[''],
      image:['']
  })
  ngOnInit(): void {
    if(this.AuthorService.selectedauthor != undefined)
    {
      // console.log(this.AuthorService.selectedauthor);
      // this.upAuthor = this.AuthorService.selectedauthor;
      this.upAuthorForm.setValue({
      id:this.AuthorService.selectedauthor._id,
      name:this.AuthorService.selectedauthor.name,
      nationality:this.AuthorService.selectedauthor.nationality,
      genre:this.AuthorService.selectedauthor.genre,
      works:this.AuthorService.selectedauthor.works,
      image:this.AuthorService.selectedauthor.image
      })
    }
    
  }


  updateauthor(){

    const formData = new FormData();
    formData.append('_id',this.AuthorService.selectedauthor._id);
    formData.append('name',this.upAuthorForm.get('name').value);
    formData.append('nationality',this.upAuthorForm.get('nationality').value);
    formData.append('works',this.upAuthorForm.get('works').value);
    formData.append('genre',this.upAuthorForm.get('genre').value);
    formData.append('image',this.upAuthorForm.get('image').value);

    console.log("hi")
    this.AuthorService.updateAuthor(formData);
    alert("Author updated successfully");
    this.router.navigate(['/authors']);
  }
  selectImage(event){
    const file = event.target.files[0];
    this.upAuthorForm.get('image').setValue(file);
    console.log(this.upAuthorForm.value);
  }
}
