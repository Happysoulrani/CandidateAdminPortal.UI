import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../candidate/candidate.service';
import { Candidate } from '../candidate/models/api.models/candidate.model';
import { Gender } from '../candidate/ui.models/gender.model';
import { GenderService } from '../services/gender.service';
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
   genderList: Gender[] = [];
  constructor(private readonly candidateService:CandidateService,
    private readonly route: ActivatedRoute,
    private readonly genderService: GenderService,
    private snackbar:MatSnackBar){}

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
this.genderService.getGenderList()
     .subscribe
     (
       (successResponse) => {
         console.log(successResponse);
         this.genderList = successResponse;
       }
     );
    }
        }
        );
      }
      onUpdate(): void
      {
        this.candidateService.updateCandidate(this.candidate.id,this.candidate)
        //call studentservice to update student
      .subscribe(
        (successResponse) => {
         this.snackbar.open('candidate updated successfully',undefined,{
         duration:2000});
    //show a notification
        },
        (errorResponse) => {

        }

      );
      }

}





