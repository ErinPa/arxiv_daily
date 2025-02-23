import { Component } from '@angular/core';
import { PapersPage } from './components/papers-page.component';

@Component({
  selector: 'app-root',
  imports: [PapersPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arxiv_daily_front';
}
