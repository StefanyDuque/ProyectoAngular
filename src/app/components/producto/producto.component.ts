import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: any = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private productoService: ProductosService,
    private router: Router
  ) {
    this.activeRoute.params.subscribe( dato => {
      this.producto = this.productoService.initProductos(dato.sku);
    });
   }

  ngOnInit(): void {
  }

  addProducto(sku: string){

  }

}
