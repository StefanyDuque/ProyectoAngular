import { Component } from '@angular/core';
import alertasConfig from '../assets/errors.json';

interface Rol{
  administrador?: boolean; // 1
  cliente?: boolean; // 2
  coordinador?: boolean; // 3
  profesional?: boolean; // 4
  operario?: boolean; // 5
  vendedor?: boolean; // 6
  proveedor?: boolean; // 7
}
export interface Usuario{
  username: string;
  nombre: string;
  apellido: string;
  identificacion: string;
  correo: string;
  rol: Rol;
  telefono: string;
  fechaNacimiento: Date;
  estatus: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectosAngular';
}
export function isKeyof<T extends object>(obj: T, possibleKey: keyof any): possibleKey is keyof T {
  return possibleKey in obj; 
}
export function Alertas(e) { 
  const typeMsg = 'success hide';
  const msg = '';
  e = e.toString();
  // console.log(alertasConfig[e]);
  const alerta = isKeyof(alertasConfig, e) ? alertasConfig[e] : {type: typeMsg, message: msg}; // {type: typeMsg, message: msg};
  // console.log(alerta);
  return alerta;
}
export const passwordStrongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
export const passwordMediumRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
