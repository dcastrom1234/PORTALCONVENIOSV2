import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';
import { CatalogoService } from '@ser/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  listaServicios: any;
  constructor(
    private auth: AuthService,
    private route: Router,
    private c: CatalogoService
  ) { }

  ngOnInit(): void {
    this.traeListaServicios(sessionStorage.getItem('entidad'));
  }

  // TODO: Implementar catalogo de servicios


  traeListaServicios(entidad){
    this.c.listaServiciosCatalogos(entidad).subscribe(
      res=>{ this.listaServicios = res },
      err=>{ console.log(err)}
    )
  }

}
