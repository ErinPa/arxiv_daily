import { Component, Input, input } from '@angular/core';
import { Observable } from 'rxjs';
import { Paper } from '../interfaces/paper';
import { PaperService } from '../services/paper-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'paper-overview',
  imports: [AsyncPipe],
  templateUrl: 'paper-overview.html',
  styleUrl: 'paper-overview.css',
})
export class PaperOverview {
  paper$!: Observable<Paper>;

  constructor(private paperService: PaperService) {}
  ngOnInit(): void {
    /*this.paperService.getPaper().subscribe(
      (res) => {
        console.log(res);
      }
    );*/
    this.paper$ = this.paperService.getPaper();
  }
}
