import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';
import { SolicitudesService } from '@ser/solicitudes.service';

@Component({
  selector: 'app-detallesolicitud',
  templateUrl: './detallesolicitud.component.html',
  styleUrls: ['./detallesolicitud.component.css']
})
export class DetallesolicitudComponent implements OnInit {
  solicitud: Number=0;
  datos:any;

  constructor(
    private router: Router,
    private params: ActivatedRoute,
    private sol: SolicitudesService,
    private auth: AuthService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.solicitud = this.params.snapshot.params.solicitud;
    this.detalleSolicitud(this.solicitud)
  }

  detalleSolicitud(id){
    this.sol.detalleSolicitud(id).subscribe(
      res=>{
        this.datos=res;
        console.log(this.datos)
      },
      err=>{ console.log(err)}
    )
  }

  goBack(){
    this.location.back();
  }
  apruebaConvenios(id){
    let c = confirm('Confirma la aprobación de esta solicitud?')
    if (c){
      this.sol.apruebaConvenios({'id':id,'usuario':this.auth.userLogged()}).subscribe(
        res=>{  console.log(res); 
                this.router.navigate(['/lsnuevasent']);
              },
        err=>{ console.log(err)}
      );
    }
  }
  changeLocation() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); // navigate to same route
    }); 
}

}
