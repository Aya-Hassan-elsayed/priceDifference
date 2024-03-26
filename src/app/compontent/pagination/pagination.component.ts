import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  weatherData: any[] = [];
  displayedColumns: string[] = ['date', 'temperatureC', 'temperatureF', 'summary'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private weatherService: WeatherDataService) {}

  ngOnInit() {
    this.weatherService.getWeatherForecast().subscribe((data) => {
      this.weatherData = data;
      this.dataSource = new MatTableDataSource(this.weatherData);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
