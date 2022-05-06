import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../candidate/candidate.service';
import { Candidate } from '../candidate/models/api.models/candidate.model';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  candidateId: string | null | undefined;
  candidate: Candidate =
  {
    id: '',
    firstName: '',
    email: '',
    mobile: 0,
    genderId: '',
    gender: {
      id: '',
      description: ''
    },
    address: {
      id: '',
      permanentAddress: ''
    },
    lastName: ''
  }

  constructor(private readonly candidateService:CandidateService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
            this.route.paramMap.subscribe(
              (Params) =>
              {this.candidateId = Params.get('id');


      if(this.candidateId)
      {

      this.candidateService.getCandidate(this.candidateId)
      .subscribe(
        (successResponse) => {
        this.candidate = successResponse;
      }
            );
    }
        }
        );
      }
    }





