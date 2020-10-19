import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  mycurdate: Date = new Date();

  telefono = [3012381172, 3008423480, 8676587];

  direccion = ['Bucaramanga', 'Santander', 'Colombia', 'CO'];

  visitas = (this.telefono[2]) / 1000;

  porcentaje = this.visitas / 100000;
  // c1 * c2/d1 = d2 -> visitas total/ ? ->  100% -> si  100% 1000000 ? % visitas

  email = 'stefany1995.duque@hotmail.com';

  descripcion = 'Cuidado personal y Belleza.';

  ngOnInit(): void {
  }

}
