import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';


import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { HomeadminComponent } from './components/backadmin/homeadmin/homeadmin.component';
import { DetallesolicitudComponent } from './components/backadmin/detallesolicitud/detallesolicitud.component';
import { ListaconveniosComponent } from './components/backadmin/listaconvenios/listaconvenios.component';
import { ListanuevasentidadesComponent } from './components/backadmin/listanuevasentidades/listanuevasentidades.component';
import { HomeentidadComponent } from './components/backentidad/homeentidad/homeentidad.component';
import { FirmaconvenioComponent } from './components/backentidad/firmaconvenio/firmaconvenio.component';
import { SolicitudesComponent } from './components/backentidad/solicitudes/solicitudes.component';
import { AuthService } from './services/auth.service';
import { CatalogoService } from './services/catalogo.service';
import { SolicitudesService } from './services/solicitudes.service';
import { RespuestaComponent } from './components/shared/respuesta/respuesta.component';
import { CatalogoComponent } from './components/backentidad/catalogo/catalogo.component';
import { ServiciosComponent } from './components/backadmin/servicios/servicios.component';
import { ListaserviciosComponent } from './components/backadmin/listaservicios/listaservicios.component';
import { DetalleservicioComponent } from './components/backadmin/detalleservicio/detalleservicio.component';
import { EditarServiciosComponent } from './components/backadmin/editar-servicios/editar-servicios.component';
import { CreaCatalogoComponent } from './components/backadmin/crea-catalogo/crea-catalogo.component';
import { Registro2Component } from './components/auth/registro2/registro2.component';
import { DetserviciosentComponent } from './components/backentidad/detserviciosent/detserviciosent.component';
import { CreacoordinadorComponent } from './components/backentidad/creacoordinador/creacoordinador.component';
import { MatrizComponent } from './components/backadmin/matriz/matriz.component';
import { FiltrousuariosPipe } from './pipes/filtrousuarios.pipe';
import { ListausuariosComponent } from './components/backadmin/listausuarios/listausuarios.component';
import { FirmanteComponent } from './components/backadmin/firmante/firmante.component';
import { MultifirmaComponent } from './components/backadmin/multifirma/multifirma.component';
import { PreguntasComponent } from './components/backadmin/preguntas/preguntas.component';
import { PreguntasfreqComponent } from './components/backentidad/preguntasfreq/preguntasfreq.component';
import { UsuariosadminComponent } from './components/backadmin/usuariosadmin/usuariosadmin.component';
import { TipoentidadComponent } from './components/backadmin/tipoentidad/tipoentidad.component';
import { FormulariosComponent } from './components/backentidad/formularios/formularios.component';
import { VisorconveniosComponent } from './components/backentidad/visorconvenios/visorconvenios.component';
import { TemplatenuevoComponent } from './components/backadmin/templatenuevo/templatenuevo.component';
import { TemplateeditarComponent } from './components/backadmin/templateeditar/templateeditar.component';
import { TemplatesComponent } from './components/backadmin/templates/templates.component';
import { UrldecodePipe } from './pipes/urldecode.pipe';
import { VisorconveniosadminComponent } from './components/backadmin/visorconveniosadmin/visorconveniosadmin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeadminComponent,
    DetallesolicitudComponent,
    ListaconveniosComponent,
    ListanuevasentidadesComponent,
    HomeentidadComponent,
    FirmaconvenioComponent,
    SolicitudesComponent,
    RespuestaComponent,
    CatalogoComponent,
    ServiciosComponent,
    ListaserviciosComponent,
    DetalleservicioComponent,
    EditarServiciosComponent,
    CreaCatalogoComponent,
    Registro2Component,
    DetserviciosentComponent,
    CreacoordinadorComponent,
    MatrizComponent,
    FiltrousuariosPipe,
    ListausuariosComponent,
    FirmanteComponent,
    MultifirmaComponent,
    PreguntasComponent,
    PreguntasfreqComponent,
    UsuariosadminComponent,
    TipoentidadComponent,
    FormulariosComponent,
    VisorconveniosComponent,
    TemplatenuevoComponent,
    TemplateeditarComponent,
    TemplatesComponent,
    UrldecodePipe,
    VisorconveniosadminComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule.forRoot()
  ],
  providers: [AuthService,CatalogoService,SolicitudesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
