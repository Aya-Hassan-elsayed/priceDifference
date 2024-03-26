import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router,private spinner: NgxSpinnerService  ){}
  getvalidcertificate(){
    this.showSpinner();
    // Your logic for getvalidcertificate() here

    // Simulate an asynchronous operation (e.g., HTTP request)
    setTimeout(() => {
      this.hideSpinner();
    }, 5000); // Adjust the timeout as needed
    this.router.navigate(['/valid-certifcate']);
  }
  getinvalidcertificate(){
    this.showSpinner();
    // Your logic for getvalidcertificate() here

    // Simulate an asynchronous operation (e.g., HTTP request)
    setTimeout(() => {
      this.hideSpinner();
    }, 5000); 
    this.router.navigate(['/invalid-certifcate']);
  }
  getallcertificate(){
    this.showSpinner();
    // Your logic for getvalidcertificate() here

    // Simulate an asynchronous operation (e.g., HTTP request)
    setTimeout(() => {
      this.hideSpinner();
    }, 5000); 
    this.router.navigate(['/all-data']);

  }
  private showSpinner(): void {
    this.spinner.show();
  }

  private hideSpinner(): void {
    this.spinner.hide();
  }

}
