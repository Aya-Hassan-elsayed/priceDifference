import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatMenuPanel } from '@angular/material/menu'; // Import MatMenuPanel

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menu!: MatMenuPanel<any>;

  lang:any="en"
  constructor(private router: Router,private spinner: NgxSpinnerService ,private translate:TranslateService ){
    console.log(this.translate)
    this.lang=this.translate.currentLang
  }
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
  changeLanguage(){
   if(this.lang=="en") {
    localStorage.setItem('language','ar')
   
   }else{
    localStorage.setItem('language','en')

   }
   window.location.reload()
  }
}
