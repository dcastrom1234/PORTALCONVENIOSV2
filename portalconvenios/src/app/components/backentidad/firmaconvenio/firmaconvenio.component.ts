import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';
import { CatalogoService } from '@ser/catalogo.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler} from 'angular-oauth2-oidc-jwks';
import { authConfig } from 'app/sso.config';
import { SolicitudesService } from '@ser/solicitudes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'app-firmaconvenio',
  templateUrl: './firmaconvenio.component.html',
  styleUrls: ['./firmaconvenio.component.css']
})
export class FirmaconvenioComponent implements OnInit {

  hayConvenios: boolean=false;
  code: any;
  state: any;
  token: any;
  acceso: any;
  listaPorFirmar: any;
  documento: any;
  paso:any;
  confirmado:any;
  listaConvenios:any;
  confirmadoCU:any=false;
  firma: FormGroup;
  constructor(
    private oauthService: OAuthService,
    private router: Router,
    private c: CatalogoService,
    private sol: SolicitudesService,
    private fb: FormBuilder
  ) { 
    this.firma = this.fb.group({
      documento: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    //this.conveniosPorFirmar();
    //this.iniciaCU();
    this.iniciaCUFake();
    this.revisaEstadoFirmaCU();
  }

  revisaEstadoFirmaCU(){
    if (sessionStorage.runCU){
      this.confirmadoCU=true;
      this.conveniosDisponibles();
   }
  }

  iniciaCU(){
    this.configureSingleSignOn();

    if (sessionStorage.getItem('c')&& sessionStorage.getItem('s') && !sessionStorage.getItem('atoken')){
      let p1={
        code:sessionStorage.getItem('c'),
        state: sessionStorage.getItem('s')
      }
      this.paso2(p1);
      this.documento = sessionStorage.getItem("entidad")

      let datos:any ={
        login: sessionStorage.getItem("login"),
        entidad: sessionStorage.getItem("entidad")
      }
      //console.log(datos)
      this.sol.datosConvenio(datos).subscribe(
        res=>{ this.paso = res; }, err=>{ console.log(err) }
      )
    }
  }

  iniciaCUFake(){
    sessionStorage.c="1111"
    sessionStorage.s="fake"
    sessionStorage.atoken="faketoken"
    sessionStorage.runCU="23456345"
  }



  conveniosDisponibles(){
    this.c.listaConveniosDisponibles().subscribe(
      res=> { this.listaConvenios = res },
      err=> { console.log(err)}
    )
  }


  conveniosPorFirmar(){
    let mail = sessionStorage.getItem('login');
    this.c.listaConveniosPorFirmar().subscribe(
      res=>{ this.listaPorFirmar = res;
        this.hayConvenios = (res)?true:false;
      },
      err=>{ console.log(err) }
    )
  }
  // Obtiene el token post login
  paso2(e){
      let personaCU:any = this.sol.paso2token(e);
  }

  configureSingleSignOn(){
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.tryLogin();
  }

  login(){
    this.oauthService.initImplicitFlow();
  }
  
  logout(){
    this.oauthService.logOut();
  }

  firmaDocumento(){
    let data = this.firma.value
    data.firma1 = sessionStorage.login;
    this.c.firmaConvenioFirma1(data).subscribe(
      res=>{ let paso:any = res; alert(paso.message); 
        this.ngOnInit
      },
      err=> console.log(err)
    )
  }

}
