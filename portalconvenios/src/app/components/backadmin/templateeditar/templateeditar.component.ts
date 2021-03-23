import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@ser/data.service';


@Component({
  selector: 'app-templateeditar',
  templateUrl: './templateeditar.component.html',
  styleUrls: ['./templateeditar.component.css']
})
export class TemplateeditarComponent implements OnInit {
  
  
  tpl: FormGroup;
  plantilla: any;
  constructor(
    private ds: DataService,
    private fb: FormBuilder,
    private params: ActivatedRoute
  ) { 
    this.tpl = this.fb.group({
      titulo:['', [Validators.required]],
      descripcion:['',],
      cuerpo:['', [Validators.required]],
      servicio:['', [Validators.required]],
      tid:[''],
      nombre:['',[Validators.required]]
    })
  }

  tid: number;

  ngOnInit(): void {
    this.tid = this.params.snapshot.params.id;
    this.LeeTemplate(this.tid);
  }

  LeeTemplate(t){
    console.log(t)
    this.ds.traePlantilla(t).subscribe(
      (res)=>{ let paso:any = res; this.tpl.setValue({
        titulo:decodeURI(atob(paso.titulo)),
        descripcion:paso.descripcion,
        cuerpo:decodeURI(atob(paso.cuerpo)).replace(/<br>/g,'\n'),
        servicio: paso.servicio,
        tid: this.tid,
        nombre: paso.nombre
      }
      )},
      err=> console.log(err)
    )
  }

  get f(){
    return this.tpl.controls
  }

  actualizaTemplate(){
    let tp={
      tid: this.f['tid'].value,
      titulo:btoa(encodeURI(this.f['titulo'].value)),
      descripcion:this.f['descripcion'].value,
      cuerpo:btoa(encodeURI(this.f['cuerpo'].value)).replace(/<br>/g,'\n'),
      servicio: this.f['servicio'].value,
      nombre: this.f['nombre'].value
    }
    this.ds.actualizaPlantilla(tp).subscribe(
      res=>{ let paso:any=res; alert(paso.message)},
      err=> console.log(err)
    )
  }
}
