import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { Subscription } from 'rxjs';

import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  userDetail;
  username: any;
  subscription: Subscription;

  constructor(public dialog: MatDialog, private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.username = message.text;
      console.log(this.username)
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      width: '325px',
    });
  }

  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem('userDetails'));
    this.username = this.userDetail.username;
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
