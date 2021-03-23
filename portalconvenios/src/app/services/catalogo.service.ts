import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(
    private h:HttpClient
  ) { }

    acceso: any;
    code: any;
    stat: any;
    token: any;
    url:string= environment.url
  listaNombreServicios(){
    return this.h.get(this.url + '/api/rcconv/listaNombreApis');
  }

  nuevoServicio(data){
    return this.h.post(this.url + '/api/rcconv/servicio/nuevo',data);
  }

  detalleServicios(id){
    return this.h.get(this.url + '/api/rcconv/detserv/'+id);
  }
  detalleServicios2(id){
    return this.h.get(this.url + '/api/rcconv/detserv2/'+id);
  }

  actualizaServicio(data){
    return this.h.put(this.url + '/api/rcconv/actualizaServicio',data);
  }

  creaCatalogo(data){
    return this.h.post(this.url + '/api/rcconv/catalogo/nuevo', data);
  }

  agregaServiciosAlCatalogo(data){
    return this.h.post(this.url + '/api/rcconv/catalogo/agregaservicios', data)
  }
  
  cargaValoresCatalogo(s){
    return this.h.get(this.url + '/api/rcconv/catalogo/'+s)
  }

  listaServiciosCatalogos(s){
    return this.h.get(this.url + '/api/rcconv/servcatentidad/'+s)
  }

  menu(p){
    return this.h.get(this.url + '/api/rcconv/menu/'+p)
  }

  matriz(){
    return this.h.get(this.url + '/api/rcconv/matriz');
  }

  activacionServicios(servicio){
    return this.h.get(this.url + '/api/rcconv/servicios/activa/'+servicio);
  }

  activaTodosLosServicios(datos){
    return this.h.get(this.url+'/api/rcconv/servicios/actodos/'+datos)
  }

  firmaPaso2(){
    let paso2:any = {
      client_id:'b50d3e39697d4b698fe829fa4c07cbac',
      client_secret:'c9f56cb622e844269bac5d66c631be0e',
      redirect_uri: environment.redirect_uri,
      grant_type: 'authorization_code',
      code: this.code,
      state: this.stat
    }
    let head = new HttpHeaders();
    head.append('Content-Type','application/x-www-form-urlencoded');
    head.append('Access-Control-Allow-Origin', environment.origin )
    return this.h.post('https://accounts.claveunica.gob.cl/openid/token/',paso2,{ headers: head})
  }

  firmaPaso3(){
    let head = new HttpHeaders();
    head.append('Content-Type','application/x-www-form-urlencoded');
    head.append('Authentication',' bearer' + this.token);

    let data:any = {
      client_id:'b50d3e39697d4b698fe829fa4c07cbac',
      client_secret:'c9f56cb622e844269bac5d66c631be0e',
      redirect_uri: environment.redirect_uri,
      grant_type:'authorization_code',
      code: this.code,
      state: this.stat
    }
    return this.h.post('https://accounts.claveunica.gob.cl/openid/token/',data, { headers: head } )
  }

  listaConveniosPorFirmar(){
    return this.h.get(this.url + '/api/rcconv/listaconveniosporfirmar')
  }

  listaConveniosDisponibles(){
    return this.h.get(this.url + '/api/rcconv/convenios/lista/'+sessionStorage.entidad);
  }

  listaComunas(){
    return this.h.get(this.url + '/api/rcconv/comunas')
  }

  listaEntidades(){
    return this.h.get(this.url + '/api/rcconv/listaEntidades');
  }

  firmaConvenio(e){
    return this.h.post<any>(this.url + '/api/rcconv/firmaconvenio',e);
  }

  firmaConvenioFirma1(e){
    return this.h.post<any>(this.url +'/api/rcconv/convenio/firma1',e)
  }

  firmaConvenioFirma2(e:any){
    console.log(e)
    return this.h.post(this.url +'/api/rcconv/convenio/firma2',e)
  }

  listaQA(){
    return this.h.get(this.url+'/api/rcconv/listaqa')
  }

  creaQA(e){
    return this.h.post(this.url + '/api/rcconv/listaqa/nuevo',e)
  }
}
