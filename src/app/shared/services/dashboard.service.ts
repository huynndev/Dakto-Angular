import { Injectable } from '@angular/core';
import { BaseService } from './base-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getAllCategory(): Observable<Category[]> {
    const url = `ArticleCategory/GetAllCategory`;
    return this.get<Category[]>(url);
  }
}
