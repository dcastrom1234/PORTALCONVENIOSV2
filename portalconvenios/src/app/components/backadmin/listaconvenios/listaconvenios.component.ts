import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitudesService } from '@ser/solicitudes.service';

@Component({
  selector: 'app-listaconvenios',
  templateUrl: './listaconvenios.component.html',
  styleUrls: ['./listaconvenios.component.css']
})
export class ListaconveniosComponent implements OnInit {
  listado: any;
  constructor(
    private sol: SolicitudesService,
    private router: Router,
    private l: Location
  ) { }

  ngOnInit(): void {
    this.listaConvenios();
  }

  listaConvenios(){
    this.sol.listaEntidadesAprobadas().subscribe(
      res=>{ this.listado=res; },
      err=>{ console.log(err)}
    );
  }

  goBack(){
    this.l.back()
  }
}
