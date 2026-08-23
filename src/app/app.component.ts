import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  lang: string = 'en'; // Default to English

  constructor(private translate: TranslateService) {
    this.lang = localStorage.getItem('language') || 'en'; // Initialize language
    this.translate.use(this.lang); // Set initial language

    // Update page direction based on language
    if (this.lang === 'ar') {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }
  }
  title = 'my-project';
}
