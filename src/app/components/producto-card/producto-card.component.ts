import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent implements OnInit {
 @Input() producto: any = {};
 @Input() sku: string;
 @Output() productoSelect: EventEmitter<string>;
  constructor(
    private productoService: ProductosService,
    private router: Router
    ) { this.productoSelect = new EventEmitter(); }

  ngOnInit(): void {
  }

  verProducto(){
    this.router.navigate(['/Producto', this.sku]);
  }
}
