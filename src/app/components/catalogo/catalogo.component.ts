import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
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

  verProducto(producto){
    console.log(producto);
  }

}
