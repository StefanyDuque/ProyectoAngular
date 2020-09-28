import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  mycurdate: Date = new Date();

  telefono = 3012381172;

  direccion = 'Bucaramanga, Santander';

  email = 'stefany1995.duque@hotmail.com';

  descripcion = 'Cuidado personal y Belleza.';

  ngOnInit(): void {
  }

}
