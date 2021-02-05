import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import {ServiciosService} from '../../services/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: any = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private productoService: ProductosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(() => {
      this.productos = this.productoService.getProductos();
    });
  }

  verProducto(sku){
    this.router.navigate(['/Producto', sku]);
  }
  getServiciosTipo(tipo){
    return new ServiciosService().getServiciosByTipo(tipo);
  }
  verServicio(nickname){
    this.router.navigate(['/Servicio', nickname]);
  }
}
