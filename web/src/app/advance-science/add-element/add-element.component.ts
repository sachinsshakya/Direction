import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from '../advance-science.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.scss']
})
export class AddElementComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddElementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
    private userService: UserService,
    private toastr: ToastrService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    Weight: new FormControl(null, Validators.required),
    Symbol: new FormControl(null, Validators.required)
  });

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.userService.postElement(this.form.value).subscribe((res) => {
      if (res) {   
          this.dialogRef.close(res); 
          this.toastr.success('Element added succesfully');
      } else {
        this.toastr.error('Something went wrong');
      }
    });
  }
}
