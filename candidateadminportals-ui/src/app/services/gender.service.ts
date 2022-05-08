import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../candidate/models/api.models/gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService
 {
private baseApiUrl = "https://localhost:44322";

  constructor(private httpClient:HttpClient) { }
  getGenderList(): Observable<Gender[]>
  {
   return  this.httpClient.get<Gender[]>(this.baseApiUrl + '/gender' )
  }
}
