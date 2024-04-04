import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListsService } from 'src/app/services/lists.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableDataSourcePaginator } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

export interface PeriodicElement {
  date: string;
  temperatureC: string;
  temperatureF: string;
  summary: string;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})

export class ListsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'temperatureC', 'temperatureF', 'summary'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) Paginator!:MatPaginator
  @ViewChild( MatSort)Sort!: MatSort
 

  constructor(private service: ListsService, public dialog: MatDialog,private router: Router,private spinner: NgxSpinnerService ) {}

  ngOnInit(): void {
    this.getAllData();

  }

  getAllData() {
    this.service.getAllData().subscribe(
      (res: any) => {
        this.dataSource.data = this.mappingTasks(res);
        this.dataSource.paginator=this.Paginator
        this.dataSource.sort=this.Sort
      },
      (error) => {
        // Handle error
      }
    );
  }

  mappingTasks(WeatherForecast: any[]): PeriodicElement[] {
    if (!WeatherForecast || !Array.isArray(WeatherForecast)) {
      console.error('Data is undefined or not an array.', WeatherForecast);
      return []; 
    }

    return WeatherForecast.map((item: any) => {
      return {
        date: item.date,
        temperatureC: item.temperatureC,
        temperatureF: item.temperatureF,
        summary: item.summary,

      };
    });
  }
  applyfliter(event:Event){
    const FilterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=FilterValue.trim().toLowerCase()
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }
 
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