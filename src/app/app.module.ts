import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './GMAO/comp_home_page/nav/nav.component';
import { FooterComponent } from './GMAO/comp_home_page/footer/footer.component';
import { HomePageComponent } from './GMAO/home-page/home-page.component';
import { SideBarComponent } from './GMAO/comp_home_page/side-bar/side-bar.component';
import { ClimatiseurComponent } from './GMAO/climatiseur/climatiseur.component';
import { CompresseurComponent } from './GMAO/compresseur/compresseur.component';
import { RIAComponent } from './GMAO/ria/ria.component';
import { PressDechetComponent } from './GMAO/press-dechet/press-dechet.component';
import { LocalBacheComponent } from './GMAO/local-bache/local-bache.component';
import { LocalInflamableComponent } from './GMAO/local-inflamable/local-inflamable.component';
import { EclirageUsinComponent } from './GMAO/eclirage-usin/eclirage-usin.component';
import { DetComponent } from './GMAO/det/det.component';
import { EquipementComponent } from './GMAO/equipement/equipement.component';
import { HomeComponent } from './GMAO/home/home.component';
import { RapportComponent } from './GMAO/rapport/rapport.component';
import { NatificationComponent } from './GMAO/natification/natification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { NgIf, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AddClimComponent } from './GMAO/add-clim/add-clim.component';
import { UrRapportComponent } from './GMAO/ur-rapport/ur-rapport.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCompresseurComponent } from './GMAO/add-compresseur/add-compresseur.component';
import { AddRiaComponent } from './GMAO/add-ria/add-ria.component';
import { AddPressDechetComponent } from './GMAO/add-press-dechet/add-press-dechet.component';
import { AddBacheComponent } from './GMAO/add-bache/add-bache.component';
import { AddInfComponent } from './GMAO/add-inf/add-inf.component';
import { AddEclirageComponent } from './GMAO/add-eclirage/add-eclirage.component';
import { AddDetComponent } from './GMAO/add-det/add-det.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AddServeurComponent } from './GMAO/add-serveur/add-serveur.component';
















@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomePageComponent,
    SideBarComponent,
    ClimatiseurComponent,
    CompresseurComponent,
    RIAComponent,
    PressDechetComponent,
    LocalBacheComponent,
    LocalInflamableComponent,
    EclirageUsinComponent,
    DetComponent,
    EquipementComponent,
    HomeComponent,
    RapportComponent,
    AddServeurComponent,
    NatificationComponent,
    AddClimComponent,
    UrRapportComponent,
    AddCompresseurComponent,
    AddRiaComponent,
    AddPressDechetComponent,
    AddBacheComponent,
    AddInfComponent,
    AddEclirageComponent,
    AddDetComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    NgIf,
    NgFor,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTabsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
