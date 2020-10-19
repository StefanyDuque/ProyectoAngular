import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  productos: any = [];
  entrada: string;
  constructor(
      private activeRoute: ActivatedRoute,
      private productoService: ProductosService,
      private router: Router
     ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(dato => {
      console.log('datos: ' + dato.entrada);
      this.productos = this.productoService.getProductosBy(dato.entrada);
      this.entrada = dato.entrada;
    });
  }

  verProducto(producto){
    console.log(producto);
  }

}
