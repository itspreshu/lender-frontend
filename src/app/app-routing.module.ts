import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LenderModule} from "./lender/lender.module";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lender',
    pathMatch: 'full'
  },
  {
    path: 'lender',
    loadChildren: () => import('./lender/lender.module').then(m => m.LenderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
