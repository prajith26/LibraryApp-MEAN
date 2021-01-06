import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorModel } from '../author.model';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:AuthorModel[];
  constructor(private Authors:StorageService,public router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.getauthors();
  }
  getauthors(){
    this.Authors.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data))
    })
  }
  viewAuthor(author){
    this.Authors.selectedauthor=author;
    console.log(this.Authors.selectedauthor);
    this.router.navigate(["/author"]);
  }

}
