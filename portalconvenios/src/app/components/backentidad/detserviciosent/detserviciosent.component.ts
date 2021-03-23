import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';
import { CatalogoService } from '@ser/catalogo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detserviciosent',
  templateUrl: './detserviciosent.component.html',
  styleUrls: ['./detserviciosent.component.css']
})
export class DetserviciosentComponent implements OnInit {

  constructor(
    private c: CatalogoService,
    private route: Router,
    private auth: AuthService,
    private params: ActivatedRoute,
    private location: Location
  ) { }
  serv: any;
  datos: any;

  ngOnInit(): void {
    this.serv = this.params.snapshot.params.servicio;
    this.detalleServicio(this.serv)
  }

  detalleServicio(servicio){
    this.c.detalleServicios(servicio).subscribe(
      res=> { this.datos = res },
      err=> { console.log(err) }
    )
  }

  volver(){
    this.location.back();
  }
}
