import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { Servicio } from '@mods/servicio.models';
import { SolicitudesService } from '@ser/solicitudes.service';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { CatalogoService } from '@ser/catalogo.service';


@Component({
  selector: 'app-editar-servicios',
  templateUrl: './editar-servicios.component.html',
  styleUrls: ['./editar-servicios.component.css']
})
export class EditarServiciosComponent implements OnInit {
  servi: any;
  fmrservicios: FormGroup;
  id: any;

  constructor(
    private fb: FormBuilder,
    private c: CatalogoService,
    private router: Router,
    private ac: ActivatedRoute
  ) { 

      this.fmrservicios= this.fb.group({
      'id':null,
      'servname': ['',Validators.required],
      'servdesc': ['',Validators.required],
      'jsonreq': [''],
      'jsonres': [''],
      'metodos': ['',Validators.required],
      'apiversion': [''],
      'url':[''],
      'endpoint':[''],
      'apistatus':null
    })
  }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params.id;
    this.cargaValores(this.id);
    console.log(this.servi)
    
  }

  cargaValores(id){
    return this.c.detalleServicios2(id).subscribe(
      res=>{ this.fmrservicios.setValue(res); console.log(res)},
      err=> console.log(err)
    )
  }

  enviar(){
    let data = this.fmrservicios.value
    return this.c.actualizaServicio(data).subscribe(
      res=>{ console.log(res)},
      err=> console.log(err)
    )
  }

}
