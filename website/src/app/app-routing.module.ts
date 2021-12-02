import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelComponent } from './travel/travel.component';


const routes: Routes = [
  
  { path: 'travel', component: TravelComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
