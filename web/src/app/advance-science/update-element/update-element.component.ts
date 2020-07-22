import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-element',
  templateUrl: './update-element.component.html',
  styleUrls: ['./update-element.component.scss']
})
export class UpdateElementComponent implements OnInit {
  elementData;
  constructor(
    public dialogRef: MatDialogRef<UpdateElementComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private userService: UserService,
    private toastr: ToastrService
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    this.userService.updateElement(this.elementData._id, this.form.value).subscribe((res) => {
      if (res) {   
          this.dialogRef.close(res); 
          this.toastr.success('Element updated succesfully');
      } else {
        this.toastr.error('Something went wrong');
      }
    });
  }

  close(){
    this.dialogRef.close();
  }

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    weight: new FormControl(null, Validators.required),
    symbol: new FormControl(null, Validators.required)
  });

  ngOnInit() {
    this.elementData = this.data.Element;
    this.bindValues(this.elementData);
  }

  bindValues(data) {
    this.form.controls.name.setValue(data.name);
    /* this.form.controls.name.disable(); */
    this.form.controls.weight.setValue(data.weight);
    this.form.controls.symbol.setValue(data.symbol);
  }
}
