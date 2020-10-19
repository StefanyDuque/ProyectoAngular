import { Injectable } from '@angular/core';

interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
  SKU: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  misproductos: Producto[] = [];
  constructor() {
    this.initProductos();
  }

  initProductos(sku: string = ''){
    this.misproductos = [];
    this.misproductos.push({nombre : 'BRONCEADOR',
    descripcion: 'Te ofrece una piel hermosa con un bronceado en tonos dorados y la protege contra las quemaduras y el envejecimiento Prematuro...! ',
    imagen: 'https://m.zeleb.es/sites/default/files/styles/news_main_image/public/7_okk.jpg', precio: 50000, SKU: 'bronceador'});
    this.misproductos.push({nombre : 'Repolarizador',
    descripcion: 'Elimina y previene el frizz. Este tratamiento actúa efectivamente devolviendo al cabello la vitalidad perdida. Regenera, repara y aviva el cabello. Es un hidratador intensivo que...',
    imagen: 'https://dolphinrose.com.co/wp-content/uploads/2018/11/8.png', precio: 20000, SKU: 'repolarizador'});
    this.misproductos.push({nombre : 'ceramaxiclear',
    descripcion: 'Para una depilación eficaz CERAMAXICLEAR,ideal para cabello grueso y rebelde,retira con facilidad el pelo de zonas pequeñas como axilas, abdomen o ingles.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQtGxqNvHk_DwsZ85M3pcUNPEMvefIQ0zmDw&usqp=CAU',
    precio: 17000.2555, SKU: 'ceramaxiclear'});
    this.misproductos.push({nombre : 'espuma FaceCLEAR', descripcion:
    'Compra tu Espuma para afeitar te ofrece una afeitada suave, con menos irritación y libre de fragancia, especialmente diseñada para la cara.',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_778495-MLM43037123590_082020-V.jpg', precio: 30000, SKU: 'faceclear'});

    for (const miproducto of this.misproductos) {
      if (miproducto.SKU == sku){
        console.log(`${miproducto.SKU} == ${sku}`);
        return miproducto;
      }
    }
    return this.misproductos[0];
  }

  getProductosBy(entrada: string){
    //  console.log('productos:: ' + this.misproductos);
    const productosBuscar: Producto[] = [];
    entrada = entrada.toLowerCase();
    this.misproductos.forEach(miproducto => {
      const nombreproducto = miproducto.nombre.toLowerCase();
      if (nombreproducto.indexOf(entrada) >= 0){
        productosBuscar.push(miproducto);
      }
    });
    return productosBuscar;
  }

  getProductos(){
    return this.misproductos;
  }
}
