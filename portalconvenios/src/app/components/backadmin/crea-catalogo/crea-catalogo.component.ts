import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '@ser/auth.service';
import { CatalogoService } from '@ser/catalogo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crea-catalogo',
  templateUrl: './crea-catalogo.component.html',
  styleUrls: ['./crea-catalogo.component.css']
})
export class CreaCatalogoComponent implements OnInit {

  frmCatalogos: FormGroup;
  sercatalogo: FormGroup;
  listaApis:any;
  listaServiciosCatalogo: any;
  idcatalogo: Number;

  constructor(
    private c:CatalogoService,
    private fb: FormBuilder,
    private auth: AuthService,
    private ac: ActivatedRoute
  ) { 
    this.idcatalogo = this.ac.snapshot.params['catalogo'];

    this.frmCatalogos = this.fb.group({
      idcatalogo:null,
      catnombre:[''],
      catdesc:[''],
      fcreate:null
    });

    this.sercatalogo = this.fb.group({
      sercat:['']
    });
  }

  ngOnInit(): void {
      this.listaNombreApis()
      if (this.idcatalogo) {
        this.abreCatalogo(this.idcatalogo)
        this.listaServiciosCatalogos(this.idcatalogo)
      }
  }

  abreCatalogo(s){
    this.c.cargaValoresCatalogo(s).subscribe(
      res=> { this.frmCatalogos.setValue(res) },
      err=> { console.log(err)}
    )
  }

  listaServiciosCatalogos(s){
    return this.c.listaServiciosCatalogos(s).subscribe(
      res=>{ this.listaServiciosCatalogo = res},
      err=> { console.log(err) }
    )
  }

  listaNombreApis(){
    this.c.listaNombreServicios().subscribe(
      res=>{ this.listaApis=res},
      err=>{ console.log(err) }
    )
  }

  guardaCatalogo(){
    this.c.creaCatalogo(this.frmCatalogos.value).subscribe(
      res=>{ this.idcatalogo = res['id'];
        if (this.idcatalogo>0){
          this.frmCatalogos.get('catnombre').disable()
        }
      },
      err=>{ console.log(err)}
    )
  }
  agregaServicios(){
    let objeto: any;
    let opcion = this.sercatalogo.get('sercat').value
    objeto = {
      catalogo: this.idcatalogo,
      usuario: this.auth.userLogged(),
      servicio: opcion
    }
    console.log(objeto)
    this.c.agregaServiciosAlCatalogo(objeto).subscribe(
      res=>{ console.log(res);
        if (res['status']=='OK'){
          this.ngOnInit()
        }
      },
      err=>{ console.log(err)}
    )
  }
}
