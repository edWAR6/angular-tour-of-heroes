// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard.component';
// import { HeroesComponent } from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';

// import { HeroService } from './hero.service'

// import { AppRoutingModule } from './app-routing.module'

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeroDetailComponent,
//     HeroesComponent,
//     DashboardComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule,
//     AppRoutingModule
//   ],
//   providers: [HeroService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

//v2
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

