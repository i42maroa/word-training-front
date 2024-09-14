import { Component } from '@angular/core';
import { RecordService } from '../../core/services/record/record.service';
import { Observable } from 'rxjs';
import { RecordInterface } from '../../data/record.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor(private readonly recordService:RecordService){}

  get recordList():Observable<Map<string, RecordInterface>>{
    const filter = null;
    return this.recordService.getRecordsByFilters(filter);
  }

}
