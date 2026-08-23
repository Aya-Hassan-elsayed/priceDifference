import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { InvalidCertifcateService } from 'src/app/services/invalid-certifcate.service';
import * as XLSX from 'xlsx';
import { NgxSpinnerService } from 'ngx-spinner';

export interface PeriodicElement {
  requestNumber: string;
  requestType: string;
  usageType: string;
  price: number;
  area: number;
  priceBfor: number;
  areabefor: string;
  typeBefor: string;
  usageTypeBefor: string;
  priceDefernce: number;
}

@Component({
  selector: 'app-invalid-certifcate',
  templateUrl: './invalid-certifcate.component.html',
  styleUrls: ['./invalid-certifcate.component.css']
})
export class InvalidCertifcateComponent implements OnInit {
  displayedColumns: string[] = [
    'requestNumber', 
    'requestType', 
    'usageType', 
    'price', 
    'area', 
    'priceBfor', 
    'areabefor', 
    'typeBefor',
    'usageTypeBefor',
    'priceDefernce'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();
  currentPage: number = 1;
  totalItems: number = 0;
  totalPage: number = 0;
  totalCount: number = 0;
  addedDateFilter: string = '';
  addeddatefiltereada:string='';
  selectedFilter: string = '';
  usageTypeFilter: string = '';
  requestTypeFilter: string = '';

  requestTypeMap: { [key: number]: string } = {
    0: "وحدة",
    1: "ارض مقاسة بالمتر",
    2: "ارض مقاسة بالفدان",
    3: "مبنى",
    4: "جراج",
    5: "مبنى بحديقة",
    10: "وحدة دوبلكس",
    13: "شالية",
    15: "فيلا",
    18: "وحدة تربليكس",
    19: "وحدة كوادريبلكس",
    24: "وحدة بحديقة"
  };

  requestTypes = [
    { label: 'None', value: '' },
    { label: 'وحدة', value: 0 },
    { label: 'ارض مقاسة بالمتر', value: 1 },
    { label: 'ارض مقاسة بالفدان', value: 2 },
    { label: 'مبنى', value: 3 },
    { label: 'جراج', value: 4 },
    { label: 'مبنى بحديقة', value: 5 },
    { label: 'وحدة دوبلكس', value: 10 },
    { label: 'شالية', value: 13 },
    { label: ' فيلا', value: 15 },
    { label: '  وحدة تربليكس', value: 18 },
    { label: '  وحدة كوادريبلكس', value: 19 },
    { label: '  وحدة بحديقة', value: 24 },
  ];

  usagetypeMap: { [key: number]: string } = {
    1: "سكني",
    2: "تجاري",
    3: "اداري",
    4: "سكني تجاري",
    5: "سكني  اداري",
    6: "تعليمي ",
    7: "ترفيهي",
    8: " ارض مقاسة بالمتر",
    9: "ارض مقاسة بالفدان",
    10: "جراج خاص",
    11: "ارض زراعية",
    12: "جراج تجاري ",
    13: "اداري تجاري",
    14: "مخزن",
    15: "مصنع"
  };

  usageType = [
    { label: 'None', value: '' }, 
    { label: 'سكني', value: 1 },
    { label: 'تجاري', value: 2 },
    { label: 'اداري  ', value: 3 },
    { label: ' سكني  تجاري', value: 4 },
    { label: 'سكني اداري ', value: 5 },
    { label: 'تعليمي ', value:6},
    { label: 'ترفيهي ', value: 7 },
    { label: 'ارض مقاسة بالمتر"', value: 8 },
    { label: 'ارض مقاسة بالفدان', value: 9 },
    { label: '  جراج خاص', value: 10 },
    { label: '   ارض زراعية', value: 11 },
    { label: '  جراج تجاري', value: 12 },
    { label: '  اداري تجاري', value: 13 },
    { label: '  مخزن ', value: 14 },
    { label: '   مصنع', value: 15 },
  ];

  constructor(private service: InvalidCertifcateService, public dialog: MatDialog, private router: Router,private spinner:NgxSpinnerService) {}

  ngOnInit(): void {
    this.getAllData(this.currentPage, '', '', '', '','');
  }

  getAllData(pageNumber: number, searchQuery: string, requestTypeFilter: string, usageTypeFilter: string, addedDateFilter: string,addeddatefiltereada:string) {
    // this.spinner.show()
    this.service.getAllData(pageNumber, searchQuery, requestTypeFilter, usageTypeFilter, addedDateFilter,addeddatefiltereada).subscribe(
      (res: any) => {
        console.log('Response from API:', res);
        this.totalCount = res.count;
        this.dataSource.data = this.mappingTasks(res.data);
        // this.spinner.hide()

      },
      (error) => {
        console.error('Error fetching data:', error);
        // Handle error
      }
    );
  }

  mappingTasks(Request: any[]): PeriodicElement[] {
    if (!Array.isArray(Request) || Request.length === 0) {
      console.error('Data is undefined or not an array.', Request);
      return [];
    }
    
    return Request.map((item: any) => {
      let areaValue: number | string = 0; 
      
      if (Array.isArray(item.after.area)) {
        areaValue = item.after.area.join(' , ') as unknown as number; 
      } else {
        areaValue = item.after.area as number; 
      }
    
      return {
        requestNumber: item.after.requestNumber,
        requestType: item.after.requestType  || 'null',
        usageType: item.after.usageType   || 'null',
        price: item.after.price  || 'null',
        area: areaValue ,
        priceBfor: item.before.priceBfor || 'null',
        areabefor: item.before.areabefor  || 'null',
        typeBefor: item.before.typeBefor  || 'null',
        usageTypeBefor: item.before.usageTypeBefor  || 'null',
        priceDefernce: item.priceDefernce ,
      };
    });
  }

  search(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.getAllData(this.currentPage, filterValue, this.requestTypeFilter, this.usageTypeFilter, this.addedDateFilter,this.addeddatefiltereada);
  }

  onpagechange(pagenumber: number) {
    this.currentPage = pagenumber;
    this.getAllData(this.currentPage, '', this.requestTypeFilter, this.usageTypeFilter, this.addedDateFilter,this.addeddatefiltereada);
  }
  applyAddedDateFilter(dateFilter: string) {
    this.addedDateFilter = dateFilter;
    this.getAllData(this.currentPage, '', '', '', this.addedDateFilter, this.addeddatefiltereada);
  }

  applyEadaDateFilter(eadaFilter: string) {
    this.addeddatefiltereada = eadaFilter;
    this.getAllData(this.currentPage, '', '', '', this.addedDateFilter, this.addeddatefiltereada);
  }

  onDateFilterChange(event: any) {
    const date = (event.target as HTMLInputElement).value;
    this.applyAddedDateFilter(date);
  }

  onEadaDateFilterChange(event: any) {
    const date = (event.target as HTMLInputElement).value;
    this.applyEadaDateFilter(date);
  }


  applyRequestTypeFilter(requestType: string) {
    this.requestTypeFilter = requestType;
    this.getAllData(this.currentPage, '', this.requestTypeFilter, this.usageTypeFilter, this.addedDateFilter,this.addeddatefiltereada);
  }

 applyUsageTypeFilter(usageType: string) {
    this.usageTypeFilter = usageType;
    this.getAllData(this.currentPage, '', this.requestTypeFilter, this.usageTypeFilter, this.addedDateFilter,this.addeddatefiltereada);
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.service.postExcelFile(file).subscribe(
        (response: any) => {
          console.log('File uploaded successfully', response);
          this.totalCount = response.countdata;
          this.dataSource.data = response.filterdata.map((requestNumber: string) => ({
            requestNumber: requestNumber,
            requestType: '', 
            usageType: '',
            price: '',
            area: '',
            priceBfor: '',
            areabefor: '',
            typeBefor: '',
            usageTypeBefor: '',
            priceDefernce: '',
          }));
        },
        (error) => {
          console.error('Error uploading file', error);
        }
      );
    }
  }
  
  
}

  
