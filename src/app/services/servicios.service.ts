import { Injectable } from '@angular/core';
import {Usuario} from '../app.component';

interface TipoServicio{
  estetica?: boolean;
  barberia?: boolean;
  belleza_integral?: boolean;
}

export interface Servicio{
  nickname: string;
  nombre: string;
  descripcion: string;
  tipo: TipoServicio;
  fecha?: Date;
  precio?: number;
  cliente?: Usuario;
  profesional?: Usuario;
  estatus: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  misServicios: Servicio[] = [];
  constructor() {
    this.initServicios();
  }

  initServicios(nickname: string = '') {
    this.misServicios = [];
    this.misServicios.push({nickname: 'cera', nombre: 'Cera', descripcion: '', tipo: {estetica: true}, estatus: 1});
    this.misServicios.push({nickname: 'una', nombre: 'Uñas', descripcion: '', tipo: {estetica: true}, estatus: 1});
    this.misServicios.push({nickname: 'spa', nombre: 'Spa', descripcion: '', tipo: {estetica: true}, estatus: 1});
    this.misServicios.push({nickname: 'corte', nombre: 'Corte', descripcion: '', tipo: {barberia: true}, estatus: 1});
    this.misServicios.push({nickname: 'tinte', nombre: 'Tinte', descripcion: '', tipo: {barberia: true}, estatus: 1});
    this.misServicios.push({nickname: 'cuchilla', nombre: 'Barba', descripcion: '', tipo: {barberia: true}, estatus: 1});
    this.misServicios.push({nickname: 'pestana', nombre: 'Pestañas', descripcion: '', tipo: {belleza_integral: true}, estatus: 1});
    this.misServicios.push({nickname: 'ceja', nombre: 'Cejas', descripcion: '', tipo: {belleza_integral: true}, estatus: 1});
    this.misServicios.push({nickname: 'beauty', nombre: 'Maquillaje', descripcion: '', tipo: {belleza_integral: true}, estatus: 1});
    for (const miServicio of this.misServicios) {
      if (miServicio.nickname == nickname){
        // console.log(`${miproducto.SKU} == ${sku}`);
        return miServicio;
      }
    }
    return this.misServicios[0];
  }
  getServiciosBy(entrada: string){
    //  console.log('Servicios:: ' + this.misServicios);
    const ServiciosBuscar: Servicio[] = [];
    entrada = entrada.toLowerCase();
    this.misServicios.forEach(miServicio => {
      const nombreServicio = miServicio.nombre.toLowerCase();
      if (nombreServicio.indexOf(entrada) >= 0){
        ServiciosBuscar.push(miServicio);
      }
    });
    return ServiciosBuscar;
  }

  getServiciosByTipo(entrada: string){
    //  console.log('Servicios:: ' + this.misServicios);
    const ServiciosBuscar: Servicio[] = [];
    entrada = entrada.toLowerCase();
    this.misServicios.forEach(miServicio => {
      const tipoServicio = miServicio.tipo;
      switch (entrada) {
        case 'estetica':
          if (tipoServicio.estetica){
            ServiciosBuscar.push(miServicio);
          }
          break;
        case 'barberia':
          if (tipoServicio.barberia){
            ServiciosBuscar.push(miServicio);
          }
          break;
        case 'belleza':
          if (tipoServicio.belleza_integral){
            ServiciosBuscar.push(miServicio);
          }
          break;
      }
    });
    return ServiciosBuscar;
  }

  getServicios(){
    return this.misServicios;
  }
}
