import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { ViewComponent } from './view.student/view.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateComponent
},
{
  path: 'candidate',
  component: CandidateComponent
},
{
  path: 'candidates/:id',
  component: ViewComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
