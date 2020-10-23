import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { MenuComponent } from './templates/menu/menu.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ProductoComponent } from './components/producto/producto.component';
const routes: Routes = [
  {path: 'Inicio', component: HomeComponent},
  {path: 'NuestraCompania', component: QuienesComponent},
  {path: 'Buscar/:entrada', component: BuscarComponent},
  {path: 'Catalogo', component: CatalogoComponent},
  {path: 'Producto/:sku', component: ProductoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
