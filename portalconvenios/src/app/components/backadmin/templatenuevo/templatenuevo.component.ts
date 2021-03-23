import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '@ser/data.service';

@Component({
  selector: 'app-templatenuevo',
  templateUrl: './templatenuevo.component.html',
  styleUrls: ['./templatenuevo.component.css']
})
export class TemplatenuevoComponent implements OnInit {
  tpl: FormGroup;
  resultado: any;
  constructor(
    private fb: FormBuilder,
    private ds: DataService
  ) {
    this.tpl = this.fb.group({
      titulo:['', [Validators.required]],
      descripcion:[''],
      cuerpo:['',Validators.required],
      servicio:['',Validators.required],
      nombre:['',Validators.required]
    })


   }

  ngOnInit(): void {
  }

  guardaTemplate(){
    let tmp = {
      titulo: btoa(this.corrigeHtml(this.tpl.get('titulo').value)),
      descripcion:this.tpl.get('descripcion').value,
      cuerpo: btoa(this.corrigeHtml(this.tpl.get('cuerpo').value)),
      servicio:this.tpl.get('servicio').value,
      nombre: this.tpl.get('nombre').value
    }
    this.ds.nuevo(tmp).subscribe(
      res=>{ this.resultado = res; alert(this.resultado.message) },
      err=> console.log(err)
    )
  }

  corrigeHtml(v:string){
    let paso = v.replace(/\n/g,'<br>')

    return encodeURI(paso)
  }


}
