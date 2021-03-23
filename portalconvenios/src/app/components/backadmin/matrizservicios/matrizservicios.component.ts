import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';
import { CatalogoService } from '@ser/catalogo.service';

@Component({
  selector: 'app-matrizservicios',
  templateUrl: './matrizservicios.component.html',
  styleUrls: ['./matrizservicios.component.css']
})
export class MatrizserviciosComponent implements OnInit {

  servicios: any;
  listado: any;

  constructor(
    private router: Router,
    private c: CatalogoService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.cargaMatriz();
  }

  cargaMatriz(){
    this.c.listaNombreServicios().subscribe(
      res=>{ this.servicios = res },
      err=> console.log(err)
    )

  }


}
