import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoService } from '@ser/catalogo.service';

@Component({
  selector: 'app-detalleservicio',
  templateUrl: './detalleservicio.component.html',
  styleUrls: ['./detalleservicio.component.css']
})
export class DetalleservicioComponent implements OnInit {
  datos: any;
  serv: Number=0;
  constructor(
    private router:Router,
    private params: ActivatedRoute,
    private c: CatalogoService
  ) { }

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
}
