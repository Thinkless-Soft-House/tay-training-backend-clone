import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsComponent } from './workouts.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';

const routes: Routes = [
  { path: '', component: WorkoutsComponent },
  { path: ':id', component: WorkoutDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutsRoutingModule {}
