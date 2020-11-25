import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { MenuComponent } from './templates/menu/menu.component';
import { FooterComponent } from './templates/footer/footer.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesComponent,
    MenuComponent,
    FooterComponent,
    BuscarComponent,
    CatalogoComponent,
    ProductoComponent,
    ProductoCardComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
