import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoService } from '@ser/catalogo.service';

@Component({
  selector: 'app-listaservicios',
  templateUrl: './listaservicios.component.html',
  styleUrls: ['./listaservicios.component.css']
})
export class ListaserviciosComponent implements OnInit {
  listado: any;
  constructor(
    private router: Router,
    private c: CatalogoService
  ) { }

  ngOnInit(): void {
    this.listaServicios();
  }

  listaServicios(){
    return this.c.listaNombreServicios().subscribe(
      res=>{ this.listado = res},
      err=>{ console.log(err)}

    )
  }


}
