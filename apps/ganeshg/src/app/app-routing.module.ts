import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'project1',
    loadChildren: () => import('./../../../project1/src/app/remote-entry/entry.module').then(m => m.RemoteEntryModule)
  },
  {
    path: 'project2',
    loadChildren: () => import('./../../../project2/src/app/remote-entry/entry.module').then(m => m.RemoteEntryModule)
  },
  {
    path: 'project3',
    loadChildren: () => import('./../../../project3/src/app/remote-entry/entry.module').then(m => m.RemoteEntryModule)
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{initialNavigation:'enabledBlocking'})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
