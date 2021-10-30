import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoancalculatorComponent } from './loancalculator/loancalculator.component';

const routes: Routes = [
  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  { path: 'calculator', component: LoancalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
