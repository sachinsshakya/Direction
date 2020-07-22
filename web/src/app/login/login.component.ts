import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data;
  userDetail;
  token;
  isRemember;
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private router: Router, private _auth: AuthService, private toastr: ToastrService) { }


  register() {
    this.router.navigate(['/register']);
  }
  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem('userDetails'));
    this.token = JSON.parse(localStorage.getItem('userDetails'));
    this.isRemember = JSON.parse(localStorage.getItem('isRemember'));
    if (this.isRemember === true) {
      if (this.userDetail && this.token) {
        this.router.navigate(['/home']);
      }
    }
  }

  ischecked(event) {
    if (event.checked) {
      this.isRemember = 'true';
    } else {
      this.isRemember = 'false';
    }
  }

  onSubmit() {
    this._auth.loginUser(this.getData()).subscribe(
      res => {
        let response = res as any;
        if (response) {
          this.router.navigate(['/home']);
          console.log(response)
          localStorage.setItem('token', response.userData.token);
          if (this.isRemember === 'true') {
            localStorage.setItem('isRemember', this.isRemember);
          }
          localStorage.setItem("userDetails", JSON.stringify(response.userData.user));
        } else {
          window.alert('invalid user');
        }
      },
      err => {
        (err);
        this.toastr.error(err.error);
      });
  }

  /* autoLogin(){
    this._auth.loginUser(this.userDetail.subscribe( 
      res => {
        let response = res as any;
        if (response) {
          this.router.navigate(['/home']);
           console.log(response) 
           localStorage.setItem('token', response.userData.token);
           localStorage.setItem("userDetails",  JSON.stringify(response.userData.user));
        } else {        
          window.alert('invalid user');
        }
      },
      err => { (err);
        this.toastr.error(err.error);
      })
    )
  }
 */

  getData() {
    this.data = {
      email: this.loginform.get('email').value,
      password: this.loginform.get('password').value
    }
    return this.data;
  }

  /*  onSubmit() {
     const user = {
       username: 'sachin',
       password: '1297',
     };
     let inputName = this.loginform.get('username').value;
     let inputPassword = this.loginform.get('password').value;
     if (inputName === user.username && inputPassword === user.password) {
       this.router.navigate(['/home']);
     }
   } */
}
