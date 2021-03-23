import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private h: HttpClient,
    private router: Router
  ) { }
    url:string= environment.url
  loginUser(user){
    sessionStorage.clear();
    return this.h.post<any>(this.url + '/api/rcconv/login', user);
  }

  loggedIn() {
    return !!sessionStorage.getItem('logged');
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }

  esAdmin(){
    let data = sessionStorage.getItem('utype')
    return data==='Administrador'?true:false
  }

  esApoderado(){
    let data = sessionStorage.getItem('utype')
    return data==='Juez'?true:false;
  }

  esCoordinador(){
    let data = sessionStorage.getItem('utype')
    return data==='Coordinador'?true:false;
  }

  tipoPerfil(e){
    let data = sessionStorage.getItem('utype')
    return data===e?true:false;
  }

  userLogged(){
    let data = sessionStorage.getItem('logged').split(":")[0]
    return data;
  }

  registroUsuario(e){
    return this.h.post<any>(this.url + '/api/rcconv/registro/usuario', e)
  }

  registroEntidad(e){
    return this.h.post<any>(this.url + '/api/rcconv/registro/entidad', e)
  }

  runUsuario(e){
    return this.h.get(this.url + '/api/rcconv/usuario/run/'+e)
  }


  logs(mensaje){
    return this.h.post<any>(this.url + '/api/rcconv/logs', mensaje);
  }

  listaUsuarios(){
    return this.h.get(this.url + '/api/rcconv/usuarios/listado')
  }

  listaAdmin(){
    return this.h.get(this.url + '/api/rcconv/usuarios/administradores')
  }

  cambiaEstadoUsuario(e){
    let u={ user:e }
    return this.h.post<any>(this.url + '/api/rcconv/usuarios/cambiaEstado', u)
  }

  fijaFirmante(e){
    let u = { firmante:e }
    return this.h.post<any>(this.url+'/api/rcconv/usuarios/firmante', u)
  }

}
