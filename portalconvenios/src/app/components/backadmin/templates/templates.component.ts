import { Component, OnInit } from '@angular/core';
import { DataService } from '@ser/data.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor(
    private ds: DataService
  ) { }
  listado: any;
  ngOnInit(): void {
    this.listadoPlantillas();
  }

  listadoPlantillas(){
    this.ds.listadoPlantillas().subscribe(
      res=>{ this.listado=res; console.log(this.listado) },
      err=>{ console.log(err)}
    )
  }

  deco(a){
    return decodeURI(atob(a))
  }

}
