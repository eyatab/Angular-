/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private analytics: AnalyticsService, private auth :AuthService,private seoService: SeoService,private menuService: NbMenuService) {
}
  ngOnInit(): void {
   
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item.title);
      });
  }
  onContecxtItemSelection(title) {
    if(title=='Déconnexion')
    {this.auth.logout();}
   
  }
}
