import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  url:string= environment.url
  constructor(
    private h: HttpClient,
    private router: Router
  ) { }

  datos: any;
  persona: any;

  listaEntidadesSinAprobacion(){
    return this.h.get<any>(this.url + '/api/rcconv/lstEntAprobacion');
  }

  listaEntidadesAprobadas(){
    return this.h.get<any>(this.url + '/api/rcconv/lstEntAprobada');
  }

  apruebaConvenios(convenio){
    return this.h.post(this.url + '/api/rcconv/actualizaConvenio',convenio);
  }

  detalleSolicitud(id){
    return this.h.get(this.url + '/api/rcconv/detalleSolicitud/'+id);
  }

  validaConvenioAutorizado(e){
    return this.h.post(this.url + '/api/rcconv/convenios/valida', e);
  }


  paso2token(e) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })};
    const body = "client_id="+environment.client_id+"&client_secret="+environment.client_secret+"&redirect_uri=" + environment.encoded_uri +"&grant_type=authorization_code&code="+e.code+"&state="+e.state
    
    this.h.post(environment.auth_url, body , httpOptions).subscribe(
      res=> { this.datos = res;
        sessionStorage.setItem('atoken',this.datos.access_token);
        this.paso3info(this.datos.access_token).subscribe(
          res=> { this.persona = res; sessionStorage.runCU=this.persona.RolUnico.numero;  },
          err=> { console.log(err) })
      },
      err=> console.log(err)
    )
    return this.persona
  }

  paso3info(e){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  'Bearer '+e
      })};
    return this.h.post(environment.info_url,null,httpOptions)
  }

  datosConvenio(e){
    return this.h.post(environment.url+'/api/rcconv/convenio/datos',e)
  }
}
