import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiStatusService } from './services/api-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lang: string = 'en';

  apiWakingUp$ = this.apiStatus.wakingUp$;

  constructor(
    private translate: TranslateService,
    private apiStatus: ApiStatusService
  ) {

    this.lang =
      localStorage.getItem('language') || 'en';

    this.translate.use(this.lang);

    if (this.lang === 'ar') {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }

  
  }

  title = 'my-project';
}