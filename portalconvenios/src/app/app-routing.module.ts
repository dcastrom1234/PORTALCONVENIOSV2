import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@com/auth/login/login.component';
import { Registro2Component } from '@com/auth/registro2/registro2.component';
import { DetalleservicioComponent } from '@com/backadmin/detalleservicio/detalleservicio.component';
import { DetallesolicitudComponent } from '@com/backadmin/detallesolicitud/detallesolicitud.component';
import { EditarServiciosComponent } from '@com/backadmin/editar-servicios/editar-servicios.component';
import { FirmanteComponent } from '@com/backadmin/firmante/firmante.component';
import { HomeadminComponent } from '@com/backadmin/homeadmin/homeadmin.component';
import { ListaconveniosComponent } from '@com/backadmin/listaconvenios/listaconvenios.component';
import { ListanuevasentidadesComponent } from '@com/backadmin/listanuevasentidades/listanuevasentidades.component';
import { ListaserviciosComponent } from '@com/backadmin/listaservicios/listaservicios.component';
import { ListausuariosComponent } from '@com/backadmin/listausuarios/listausuarios.component';
import { MatrizComponent } from '@com/backadmin/matriz/matriz.component';
import { MultifirmaComponent } from '@com/backadmin/multifirma/multifirma.component';
import { PreguntasComponent } from '@com/backadmin/preguntas/preguntas.component';
import { ServiciosComponent } from '@com/backadmin/servicios/servicios.component';
import { TemplateeditarComponent } from '@com/backadmin/templateeditar/templateeditar.component';
import { TemplatenuevoComponent } from '@com/backadmin/templatenuevo/templatenuevo.component';
import { TemplatesComponent } from '@com/backadmin/templates/templates.component';
import { UsuariosadminComponent } from '@com/backadmin/usuariosadmin/usuariosadmin.component';
import { VisorconveniosadminComponent } from '@com/backadmin/visorconveniosadmin/visorconveniosadmin.component';
import { CatalogoComponent } from '@com/backentidad/catalogo/catalogo.component';
import { CreacoordinadorComponent } from '@com/backentidad/creacoordinador/creacoordinador.component';
import { DetserviciosentComponent } from '@com/backentidad/detserviciosent/detserviciosent.component';
import { FirmaconvenioComponent } from '@com/backentidad/firmaconvenio/firmaconvenio.component';
import { FormulariosComponent } from '@com/backentidad/formularios/formularios.component';
import { HomeentidadComponent } from '@com/backentidad/homeentidad/homeentidad.component';
import { PreguntasfreqComponent } from '@com/backentidad/preguntasfreq/preguntasfreq.component';
import { VisorconveniosComponent } from '@com/backentidad/visorconvenios/visorconvenios.component';
import { GuardadminGuard } from '@g/guardadmin.guard';
import { GuardentidadGuard } from '@g/guardentidad.guard';
import { SolicitudesService } from '@ser/solicitudes.service';


const routes: Routes = [
  { path:'', component: LoginComponent, pathMatch: 'full'},
  { path:'registro', component: Registro2Component},
  { path:'login', component: LoginComponent },
  { path:'homeadmin', component: HomeadminComponent, canActivate: [GuardadminGuard] },
  { path:'listaconvenios', component: ListaconveniosComponent, canActivate: [GuardadminGuard]},
  { path:'listausuarios', component: ListausuariosComponent, canActivate: [GuardadminGuard]},
  { path:'listanuevasentidades', component: ListanuevasentidadesComponent, canActivate: [GuardadminGuard]},
  { path:'listaservicios', component: ListaserviciosComponent, canActivate: [GuardadminGuard]},
  { path:'detasol/:solicitud', component: DetallesolicitudComponent, canActivate: [GuardadminGuard ]},
  { path:'detaserv/:servicio', component: DetalleservicioComponent, canActivate: [GuardadminGuard ]},
  { path:'firma', component: FirmaconvenioComponent, canActivate:[GuardentidadGuard]},
  { path:'homeentidad', component: HomeentidadComponent, canActivate:[GuardentidadGuard]},
  { path:'solicitudes',component: SolicitudesService, canActivate: [GuardentidadGuard]},
  { path:'servicios', component: ServiciosComponent, canActivate: [GuardadminGuard ]},
  { path:'editaserv/:id', component: EditarServiciosComponent, canActivate: [GuardadminGuard ]},
  { path:'homeentidad', component: HomeentidadComponent, canActivate: [GuardentidadGuard]},
  { path:'firmaconvenio', component: FirmaconvenioComponent, canActivate: [GuardentidadGuard]},
  { path:'home', component: LoginComponent},
  { path:'detservicios/:servicio', component: DetserviciosentComponent, canActivate: [GuardentidadGuard]},
  { path:'coordinador', component: CreacoordinadorComponent, canActivate: [GuardentidadGuard]},
  { path:'matriz',component:MatrizComponent, canActivate: [GuardadminGuard ]},
  { path:'firmante', component: FirmanteComponent, canActivate:[GuardadminGuard]},
  { path:'multifirma', component: MultifirmaComponent, canActivate:[GuardadminGuard]},
  { path:'preguntas', component: PreguntasComponent, canActivate:[GuardadminGuard]},
  { path:'preguntasfreq', component: PreguntasfreqComponent, canActivate:[GuardentidadGuard]},
  { path:'administradores', component: UsuariosadminComponent, canActivate:[GuardadminGuard]},
  { path:'formularios', component: FormulariosComponent, canActivate:[GuardentidadGuard]},
  { path:'catalogo', component: CatalogoComponent, canActivate:[GuardentidadGuard]},
  { path:'visor/:entidad/:convenio', component: VisorconveniosComponent, canActivate:[GuardentidadGuard]},
  { path:'visoradmin/:entidad/:convenio', component: VisorconveniosadminComponent, canActivate:[GuardadminGuard]},
  { path:'plantilla', component: TemplatenuevoComponent, canActivate:[GuardadminGuard]},
  { path:'editarplantilla/:id', component: TemplateeditarComponent, canActivate:[GuardadminGuard]},
  { path:'listaplantillas', component: TemplatesComponent, canActivate:[GuardadminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
