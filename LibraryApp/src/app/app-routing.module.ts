import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"",component:HomeComponent,
  },
  {
    path:"books",canActivate:[AuthGuard],component:BooksComponent,
  },
  {
    path:"authors",canActivate:[AuthGuard],component:AuthorsComponent,
  },
  {
    path:"login",component:LoginComponent,
  },
  {
    path:"register",component:RegisterComponent,
  },
  {
    path:"book",component:BookComponent,
  },
  {
    path:"author",component:AuthorComponent,
  },
  {
    path:"addAuthor",component:AddAuthorComponent
  },
  {
    path:"addBook",component:AddBookComponent
  },
  {
    path:"updateAuthor",component:UpdateAuthorComponent
  },
  {
    path:"updateBook",component:UpdateBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
