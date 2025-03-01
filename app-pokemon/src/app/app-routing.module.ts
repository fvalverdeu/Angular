import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule'
  },
  {
    path: 'pokemon',
    loadChildren: './modules/pokemon/pokemon.module#PokemonModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
