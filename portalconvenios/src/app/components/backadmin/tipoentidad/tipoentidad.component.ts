import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tipoentidad',
  templateUrl: './tipoentidad.component.html',
  styleUrls: ['./tipoentidad.component.css']
})
export class TipoentidadComponent implements OnInit {
  fgentidad: FormGroup;
  listado: any;
  
  constructor(
    private fb: FormBuilder
  ) { }
  
  ngOnInit(): void {
  }

  listaEntidades(){

  }

  creaEntidad(){

  }


}
