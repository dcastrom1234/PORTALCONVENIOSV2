import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogoService } from '@ser/catalogo.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  fmrservicios: FormGroup;
  resultado: any;

  mc=['GET','POST','PUT','DEL']

  metodos=[];
  
  constructor(
    private fb: FormBuilder,
    private c: CatalogoService,
    private router: Router
  ) { 
    this.fmrservicios= this.fb.group({
      'servname': ['',Validators.required],
      'servdesc': ['',Validators.required],
      'jsonreq': [''],
      'jsonres': [''],
      'metodos': ['',Validators.required],
      'apiversion': [''],
      'url':[''],
      'endpoint':['']
    })
  }

  ngOnInit(){}

  agregar(data: string) {
    this.metodos.push(data);
  }

  quitar(data) {
    this.metodos = this.metodos.filter(s => s !== data);
  }

  enviar(){
    let data = this.fmrservicios.value
    data.metodos= this.metodos.map(a => a).join();
    this.c.nuevoServicio(data).subscribe(
      res=>{
        this.resultado = res
        alert(this.resultado.mensaje);
        this.router.navigate(['/homeadmin'])
      },
      err=>{ console.log(err)}
    )
  }
}
