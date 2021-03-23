import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitudesComponent } from '@com/backentidad/solicitudes/solicitudes.component';
import { AuthService } from '@ser/auth.service';
import { SolicitudesService } from '@ser/solicitudes.service';

@Component({
  selector: 'app-listanuevasentidades',
  templateUrl: './listanuevasentidades.component.html',
  styleUrls: ['./listanuevasentidades.component.css']
})
export class ListanuevasentidadesComponent implements OnInit {
  listado: any;
  constructor(
    private auth: AuthService,
    private router: Router,
    private sol: SolicitudesService,
    private l: Location
  ) { }

  ngOnInit(): void {
    this.cargaListaEntAprobacion();
  }

  goBack(){
    this.l.back()
  }

  apruebaConvenios(id){
    let c = confirm('Confirma la aprobación de esta solicitud?')
    if (c){
      this.sol.apruebaConvenios({'id':id,'usuario':this.auth.userLogged()}).subscribe(
        res=>{  console.log(res); 
                this.changeLocation()
              },
        err=>{ console.log(err)}
      );
    }
  }

  changeLocation() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); 
    }); 
}
  
  cargaListaEntAprobacion(){
    this.sol.listaEntidadesSinAprobacion().subscribe(
      res=>{ this.listado=res; console.log(this.listado) },
      err=>{ console.log(err) }
    )
  }

}
