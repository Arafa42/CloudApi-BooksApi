import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ExternApiComponent } from './extern-api/extern-api.component';
import { RestApiManagerComponent } from './rest-api-manager/rest-api-manager.component';
import {AccordionModule} from 'primeng/accordion';    
import {ButtonModule} from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BoekenService } from './boeken.service';
import {TableModule} from 'primeng/table';
import {DataViewModule} from 'primeng/dataview';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibraryComponent,
    ExternApiComponent,
    RestApiManagerComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RadioButtonModule,
    ToolbarModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule,
    DataViewModule,
    PanelModule,
    AccordionModule,
    RouterModule.forRoot([

     {path: "home", component:HomeComponent},
     {path: "library", component:LibraryComponent},
     {path: "externapi", component:ExternApiComponent},
     {path: "restapimanager", component:RestApiManagerComponent},
     {path: "", redirectTo: "home", pathMatch:"full"}

    ])
  ],
  
  providers: [

  BoekenService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
