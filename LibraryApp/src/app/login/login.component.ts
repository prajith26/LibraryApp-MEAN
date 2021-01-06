import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService:AuthService,public router:Router) { }

  ngOnInit(): void {
  }
        User={  
          username:'',
          password:''
        }

  userVerify(){
    this.AuthService.loginUser(this.User)
    .subscribe(
      data=>{
      localStorage.setItem('token',data.token)
      // console.log(data);
      if(this.User.username=="admin@gmail.com"){
        // this.AuthService.isAdmin=true;
        // this.AuthService.setAdmin();
        // console.log(this.User.username)
        localStorage.setItem("isAdmin","true")
      }
      // else{this.AuthService.isAdmin=false;}
      alert(JSON.parse(JSON.stringify(data)).msgg);
      this.router.navigate(['/']);
    },
    err=>{
      alert(err.error.msgg);
      // window.location.reload();
    }
    )
    
    // alert("success")
    
  }

}
