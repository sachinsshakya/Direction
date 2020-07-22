import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.scss']
})
export class LogoutDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LogoutDialogComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    localStorage.clear();
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
