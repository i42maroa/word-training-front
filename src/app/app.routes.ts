import { Routes } from '@angular/router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { RecordDetailPageComponent } from './page/record-detail-page/record-detail-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'detail/:recordId', component: RecordDetailPageComponent },
];
