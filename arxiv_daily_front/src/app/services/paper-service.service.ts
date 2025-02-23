import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Paper } from '../interfaces/paper';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaperService {
  readonly API_URL = environment.API_URL;
  constructor(private http: HttpClient) {}

  getPaper(): Observable<Paper> {
    return this.http
      .get<Paper>(this.API_URL + '');
      //.pipe(map((res: Response) => res.json()));
  }
}
