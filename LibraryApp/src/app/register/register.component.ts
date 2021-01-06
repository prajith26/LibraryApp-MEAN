import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userData={
    name:"",
    email:"",
    mobile:"",
    pwd:"",
    Repwd:"",
    check: ""
  }
  constructor(private Auth:AuthService,public router:Router) { }

  ngOnInit(): void {
  }
  userRegister(){
    this.Auth.newUser(this.userData)
    .subscribe((data)=>
    {
      console.log(data);
      alert(JSON.parse(JSON.stringify(data)).msgg);
      this.router.navigate(['/login']);
    })
  }

}
