import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './models/api.models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private baseApiUrl ='https://localhost:44322';

  constructor(private httpClient: HttpClient) { }
  getCandidates(): Observable<Candidate[]>
  {

  return this.httpClient.get<Candidate[]>(this.baseApiUrl + '/candidate');

}
getCandidate(candidateId: string):Observable<Candidate>
{
 return  this.httpClient.get<Candidate>(this.baseApiUrl + '/candidate/' + candidateId )
}
}
