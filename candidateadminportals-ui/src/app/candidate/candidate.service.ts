import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './models/api.models/candidate.model';
import { UpdateCandidateRequest } from './models/api.models/update.candidate.request.model';

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
updateCandidate(candidateId: string,candidateRequest:Candidate):Observable<Candidate>

{
  const updateCandidateRequest: UpdateCandidateRequest={
  firstName: candidateRequest.firstName,
  lastName: candidateRequest.lastName,
  email: candidateRequest.email,
  mobile: candidateRequest.mobile,
  genderId: candidateRequest.genderId,
  permanentAddress: candidateRequest.address.permanentAddress,

}
   return this.httpClient.put<Candidate>(this.baseApiUrl + '/candidate/' + candidateId,updateCandidateRequest)
}
}

