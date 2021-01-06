import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorModel } from '../author.model';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  singleAuthor:AuthorModel;
  constructor(private AuthorService:StorageService,public router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.singleAuthor=this.AuthorService.selectedauthor;
  }
  deleteauthor(){
    this.AuthorService.deleteAuthor(this.singleAuthor._id);
    alert("Author deleted");
    this.router.navigate(['/authors']);
  }

}
