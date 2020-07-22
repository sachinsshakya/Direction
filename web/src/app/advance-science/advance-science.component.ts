import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddElementComponent } from './add-element/add-element.component';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { UserService } from '../user.service';
import { DeleteElementComponent } from './delete-element/delete-element.component';
import { UpdateElementComponent } from './update-element/update-element.component';
import { ToastrService } from 'ngx-toastr';

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}
 
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  { name: 'Helium', weight: 4.0026, symbol: 'He'},
  { name: 'Lithium', weight: 6.941, symbol: 'Li'},
  { name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  { name: 'Boron', weight: 10.811, symbol: 'B'},
  { name: 'Carbon', weight: 12.0107, symbol: 'C'},
  { name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  { name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  { name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  { name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]; 

@Component({
  selector: 'app-advance-science',
  templateUrl: './advance-science.component.html',
  styleUrls: ['./advance-science.component.scss']
})
export class AdvanceScienceComponent implements OnInit {

  displayedColumns: string[] = ['name', 'weight', 'symbol', 'action' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim();
  }

  constructor(public dialog: MatDialog, private userService: UserService,private toastr: ToastrService) {}

  openAddElementDialog(): void {
    const dialogRef = this.dialog.open(AddElementComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();  
    });
  }
  openDeleteElementDialog(ElementID): void {
    const dialogRef = this.dialog.open(DeleteElementComponent, {
      width: '350px',
      data: {id: ElementID}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();  
    });
  }

  openEditElementDialog(Element): void {
    const dialogRef = this.dialog.open(UpdateElementComponent, {
      width: '350px',
      data: {Element}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();  
    });
  }

  ngOnInit() {
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
  this.userService.getElement().subscribe( res  => {
    let data = res as any;
    this.dataSource.data = data;
    });
  }
 /*  deleteItem(id){
     (id);
     this.userService.deleteElement(id).subscribe((res) => {
      if (res) {   
          window.alert('Element deleted successfully'); 
          this.ngOnInit();  
      } else {
        window.alert('something went wrong');
      }
    }); 
  }
 */

}


