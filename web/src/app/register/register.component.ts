import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from '../user.service';
import {matchValidator} from '../shared/customValidator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private userService: UserService,private toastr: ToastrService) { }


  onSubmit() {
    this.userService.postUser(this.getData()).subscribe(
      res => {
        let response = res as any;
        if (response) {
          console.log(response);
          localStorage.setItem('token', response.token);
          this.toastr.success('User registered succesfully');
          this.router.navigate(['/login']);
        }
      },
        err => {
          this.toastr.error(err.error);
        }
    );
  }


  getData() {
    const data = {
      username: this.form.get('username').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }
    return data;
  }

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]), 
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)
    ]),
     cpassword: new FormControl('', [
      Validators.required,
      matchValidator('password')
    ]) 
  });

  ngOnInit() {
  }

}
