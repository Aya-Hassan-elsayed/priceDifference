import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableDataSourcePaginator } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner'
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})

export class ListsComponent {
  constructor( public dialog: MatDialog,private router: Router,private spinner: NgxSpinnerService ) {}

 
  getvalidcertificate(){
    this.showSpinner();
    // Your logic for getvalidcertificate() here

    // Simulate an asynchronous operation (e.g., HTTP request)
    setTimeout(() => {
      this.hideSpinner();
    }, 50); // Adjust the timeout as needed
    this.router.navigate(['/valid-certifcate']);
  }
  getinvalidcertificate(){
    this.showSpinner();
    // Your logic for getvalidcertificate() here

    // Simulate an asynchronous operation (e.g., HTTP request)
    setTimeout(() => {
      this.hideSpinner();
    }, 50); 
    this.router.navigate(['/invalid-certifcate']);
  }
  getallcertificate(){
    this.showSpinner();
    // Your logic for getvalidcertificate() here

    // Simulate an asynchronous operation (e.g., HTTP request)
    setTimeout(() => {
      this.hideSpinner();
    }, 50); 
    this.router.navigate(['/all-data']);

  }
  private showSpinner(): void {
    this.spinner.show();
  }

  private hideSpinner(): void {
    this.spinner.hide();
  }
}