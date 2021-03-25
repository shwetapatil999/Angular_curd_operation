import { environment } from './../environments/environment';
import { InMemoryDataService } from './in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    DashboardComponent,
    PagenotfoundComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
  // if production build then pass empty array otherwise HttpClientInMemoryWebApiModule
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
