import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( private userService: UserService,private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.postMail(this.form.value).subscribe((res) => {
      if (res) {   
          this.toastr.success('Element updated succesfully');
      } else {
        this.toastr.error('Something went wrong');
      }
    });

  }

  form = new FormGroup({
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    message: new FormControl(null, Validators.required)

  });



}
