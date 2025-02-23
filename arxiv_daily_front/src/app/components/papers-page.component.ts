import { Component } from '@angular/core';
import { PaperOverview } from './paper-overview.component';
import { Observable } from 'rxjs';
import { PaperService } from '../services/paper-service.service';
import { Paper } from '../interfaces/paper';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'papers-page',
  imports: [AsyncPipe, PaperOverview],
  template: `<paper-overview />`,
  styleUrl: 'paper-overview.css',
})
export class PapersPage {
  paper$!: Observable<Paper>;

  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
    /*this.paperService.getPaper().subscribe(
      (res) => {
        console.log(res);
      }
    );*/
    //this.paper$ = this.paperService.getPaper();

  }
}
