import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../user.service';
import { ToastrService } from 'ngx-toastr';
/* export interface DialogData {
  id: string;
} */

@Component({
  selector: 'app-delete-element',
  templateUrl: './delete-element.component.html',
  styleUrls: ['./delete-element.component.scss']
})
export class DeleteElementComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteElementComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
     this.userService.deleteElement(this.data.id).subscribe((res) => {
      if (res) {   
        this.dialogRef.close(res); 
        this.toastr.success('Element deleted succesfully');
      } else {
        this.toastr.error('Something went wrong');
      }
    });  
  }
  

  close(){
    this.dialogRef.close();
  }

  ngOnInit() {

  }
}
