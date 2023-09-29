import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { ModelosComponent } from './modelos/modelos.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'modelos', component: ModelosComponent},
  {path: 'pesquisar', component: PesquisaComponent},
  {path: 'account', component: AccountComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
