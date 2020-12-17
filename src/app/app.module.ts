import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { AboutComponent } from './components/about/about.component';

// Rutas
import { RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { PipesComponent } from '././components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/domseguro/dom-seguro.pipe';
import { OcultarPassPipe } from './pipes/ocultar/ocultar-pass.pipe';
import { HeroesAComponent } from './components/heroes-a/heroes-a.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HerosComponent,
    AboutComponent,
    Error404Component,
    HeroComponent,
    BuscadorComponent,
    HeroCardComponent,
    PipesComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    OcultarPassPipe,
    HeroesAComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'heros', component: HerosComponent},
    {path: 'about', component: AboutComponent},
    {path: 'hero/:id', component: HeroComponent},
    {path: 'results/:termino', component: BuscadorComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'api', component:HeroesAComponent},
    {path: '**', pathMatch: 'full', component: Error404Component},

     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
