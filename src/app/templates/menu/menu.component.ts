import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarProducto(entrada){
    if (typeof entrada != 'string'){
      console.log('tipo event');
      entrada = entrada.target.value;
    }
    this.router.navigate(['/Buscar', entrada]);
  }
}


