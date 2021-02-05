import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Servicio, ServiciosService} from '../../services/servicios.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.component.html',
  styleUrls: ['./servicios-list.component.css']
})
export class ServiciosListComponent implements OnInit {
@Input() servicio: any = {};
@Input() nickname: string;
@Output() servicioSelect: EventEmitter<string>;
  constructor(
    private servicioService: ServiciosService,
    private router: Router
  ) { this.servicioSelect = new EventEmitter(); }

  ngOnInit(): void {
  }

  verServicio(){
    this.router.navigate(['/Servicio', this.nickname]);
  }

}
