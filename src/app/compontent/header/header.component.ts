import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentSection: string = '';
  lang: string = "en";

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private translate: TranslateService
  ) {
    this.lang = this.translate.currentLang;
  }

  ngOnInit(): void {
    this.updateCurrentSection();
  }

  getvalidcertificate() {
    this.currentSection = 'Valid Certificate';
    this.navigateWithSpinner('/valid-certifcate');
  }

  getinvalidcertificate() {
    this.currentSection = 'Invalid Certificate';
    this.navigateWithSpinner('/invalid-certifcate');
  }

  getallcertificate() {
    this.currentSection = 'All Certificates';
    this.navigateWithSpinner('/all-data');
  }

  private navigateWithSpinner(route: string) {
    this.router.navigate([route]).then(() => {
      this.updateCurrentSection(); // Update section after navigation
     
    });
  }

  changeLanguage() {
    this.lang = this.lang === "en" ? "ar" : "en";
    localStorage.setItem('language', this.lang);
    window.location.reload();
  }

  private updateCurrentSection(): void {
    const url = this.router.url;    if (url.includes('invalid-certifcate')) {
      this.currentSection = 'Invalid Certificate';
    } else if (url.includes('valid-certifcate')) {
      this.currentSection = 'Valid Certificate';
    } else if (url.includes('all-data')) {
      this.currentSection = 'All Certificates';
    } else {
      this.currentSection = '';
    }
  }
}
