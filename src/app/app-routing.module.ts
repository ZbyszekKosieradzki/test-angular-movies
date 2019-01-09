import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: MovieListComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'con', redirectTo: 'contact',
    //pathMatch: 'prefix'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
