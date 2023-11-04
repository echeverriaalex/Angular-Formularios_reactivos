import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './Component/student-add/student-add.component';

const routes: Routes = [
  {path: 'add', component: StudentAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
