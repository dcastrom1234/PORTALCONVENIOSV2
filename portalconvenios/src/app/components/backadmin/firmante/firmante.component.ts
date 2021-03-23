import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@ser/auth.service';

@Component({
  selector: 'app-firmante',
  templateUrl: './firmante.component.html',
  styleUrls: ['./firmante.component.css']
})
export class FirmanteComponent implements OnInit {

  constructor(
    private auth:AuthService
  ) { }
  listado: any;
  activa: any;
  ngOnInit(): void {
    this.listaAdministradores();
  }

  activaFirmante(u){

    let c = confirm('Está seguro de activar a este usuario cómo firmante?');
    if (c){
      this.auth.fijaFirmante(u).subscribe(
        res=>{ this.activa = res; alert(this.activa.message); this.ngOnInit(); },
        err=> console.log(err)
      )
    }
  }

  listaAdministradores(){
    this.auth.listaAdmin().subscribe(
      res=>{ this.listado = res },
      err=> console.log(err)
    )
  }

}
