import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { CandidateService } from './candidate.service';
import { Candidate } from './models/api.models/candidate.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  candidate: Candidate[] = [];
  displayedColumns: string[] = ['firstName','lastName','email','mobile','gender']
 @ViewChild(MatPaginator) matPaginator!: MatPaginator;
 @ViewChild(MatSort) matSort!: MatSort;
 filterString='';

 dataSource: MatTableDataSource<Candidate> = new MatTableDataSource<Candidate>();
  constructor(private candidateService:CandidateService) { }

  ngOnInit(): void {
    //fetch candudates
    this.candidateService.getCandidate()
    .subscribe(
      (successResponse) => {
        this.candidate = successResponse;
        this.dataSource = new MatTableDataSource<Candidate>(this.candidate);
        if(this.matPaginator){
          this.dataSource.paginator = this.matPaginator;
        }
        if(this.matSort)
        {
          this.dataSource.sort = this.matSort;
        }
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
      );
  }
   filterCandidate()
   {
     this.dataSource.filter = this.filterString.trim().toLowerCase();
   }
}
