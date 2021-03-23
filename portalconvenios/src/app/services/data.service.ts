import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private h:HttpClient
  ) { }

  nuevo(e){
    return this.h.post('/api/rcconv/template/nuevo',e);
  }

  listadoPlantillas(){
    return this.h.get('/api/rcconv/template/listado');
  }

  visorConvenios(entidad, conv,tipo){
    let data={
      entidad:entidad,
      convenio:conv,
      login:sessionStorage.login
    }
    return this.h.post('/api/rcconv/data/cv'+tipo,data);
  }

  traePlantilla(id: any){
    return this.h.get('/api/rcconv/template/lee/'+id);
  }

  actualizaPlantilla(e){
    return this.h.post('/api/rcconv/template/actualiza', e)
  }
}