import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './GMAO/home-page/home-page.component';
import { ClimatiseurComponent } from './GMAO/climatiseur/climatiseur.component';
import { NavComponent } from './GMAO/comp_home_page/nav/nav.component';
import { SideBarComponent } from './GMAO/comp_home_page/side-bar/side-bar.component';
import { EquipementComponent } from './GMAO/equipement/equipement.component';
import { HomeComponent } from './GMAO/home/home.component';
import { RapportComponent } from './GMAO/rapport/rapport.component';

import { NatificationComponent } from './GMAO/natification/natification.component';
import { DetComponent } from './GMAO/det/det.component';
import { EclirageUsinComponent } from './GMAO/eclirage-usin/eclirage-usin.component';
import { LocalBacheComponent } from './GMAO/local-bache/local-bache.component';
import { LocalInflamableComponent } from './GMAO/local-inflamable/local-inflamable.component';
import { PressDechetComponent } from './GMAO/press-dechet/press-dechet.component';
import { RIAComponent } from './GMAO/ria/ria.component';
import { ServeurComponent } from './GMAO/serveur/serveur.component';
import { AddServeurComponent } from './GMAO/add-serveur/add-serveur.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home' , pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
    
},



{
  path:'equipement', component:EquipementComponent,
  children:[
    {
      path: '', redirectTo: 'climatiseur' , pathMatch: 'full'
    },
    {path:'climatiseur', component:ClimatiseurComponent},
    {path:'det', component:DetComponent},
    {path:'eclirage-usin', component:EclirageUsinComponent},
    {path:'local-bache', component:LocalBacheComponent},
    {path:'local-inflamable', component:LocalInflamableComponent},
    {path:'press-dechet', component:PressDechetComponent},
    {path:'ria', component:RIAComponent},
    {path:'serveur', component:ServeurComponent},  
    {path: 'add-serveur', component:AddServeurComponent},


  ]
},
{
  path:'rapport', component:RapportComponent
},

{
  path:'natification', component:NatificationComponent
}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
