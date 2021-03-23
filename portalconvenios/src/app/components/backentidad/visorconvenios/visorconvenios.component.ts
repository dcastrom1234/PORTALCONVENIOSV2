import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '@ser/data.service';
import * as hp from 'html2pdf.js';

@Component({
  selector: 'app-visorconvenios',
  templateUrl: './visorconvenios.component.html',
  styleUrls: ['./visorconvenios.component.css']
})
export class VisorconveniosComponent implements OnInit {

  constructor(
    private ds:DataService,
    private r: Router,
    private params: ActivatedRoute,
  ) { }
  
    convenio: number;
    entidad: number;
    visor: any;
    data: any;

  ngOnInit(): void {
   this.convenio = this.params.snapshot.params.convenio;
   this.entidad = this.params.snapshot.params.entidad;
   this.cargaConvenio(this.entidad,this.convenio);

  }

  cargaConvenio(e,id){
    this.ds.visorConvenios(e,id,'jpl').subscribe(
      res=>{ this.visor = res; 
        let v = document.getElementById('visorPdf');
        let t =decodeURI(atob(this.visor.titulohtml))
        let c =decodeURI(atob(this.visor.cuerpo));
      
        v.innerHTML='<img src="assets/icon/logo.png" alt="Servicio de Registro Civil e Identificación" width="50" height="50"><h4 style="text-align: center;">'+this.reemplaza(this.visor,t)+'</h4><br><div style="text-align: justify;">'+this.reemplaza(this.visor,c)+'</div>'
      },
      err=>{ console.log(err)}
    ) 
  }

  reemplaza(data,texto){
    let k = Object.keys(data);
    let paso: any=texto;
    paso = paso.replace(/\n/g,'<br>');
    k.forEach( v => {
      var replace="\{"+v+"\}"
      var re = new RegExp(replace,"g")
      paso = paso.replace(re,data[v])
    });
    return paso
  }


  pdf(){
    const options={
      margin: [6,4,13,4],
      filename:'convenio.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, letterRendering: true},
      jsPDF: { format: 'letter', orientation: 'portrait',compress: true },
      format: 'letter'
    };

    const content: Element = document.getElementById('visorPdf');

    hp().from(content).set(options).save();
  }

}
