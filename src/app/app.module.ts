import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENTES/navbar/navbar.component';
import { LoginComponent } from './COMPONENTES/login/login.component';
import { RedesComponent } from './COMPONENTES/redes/redes.component';
import { AcercadeComponent } from './COMPONENTES/acercade/acercade.component';
import { EducacionComponent } from './COMPONENTES/educacion/educacion.component';
import { ExperienciaComponent } from './COMPONENTES/experiencia/experiencia.component';
import { PortfolioComponent } from './COMPONENTES/portfolio/portfolio.component';
import { ContactoComponent } from './COMPONENTES/contacto/contacto.component';
import { HeaderComponent } from './COMPONENTES/header/header.component';


@NgModule({
    declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    PortfolioComponent,
    ContactoComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
