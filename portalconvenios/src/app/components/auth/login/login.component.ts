import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nap=false;
  state: any;
  code: any;
  login = {
    user:'',
    pass:''
  }
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
   
  esFirmante: any=false;

  ngOnInit(): void {
    let tipo = sessionStorage.getItem('utype')

    let urlTree = this.router.parseUrl(this.router.url);
    this.state = urlTree.queryParams['state'];
    this.code = urlTree.queryParams['code'];

    if (this.code && this.state){
      sessionStorage.setItem('c',this.code)
      sessionStorage.setItem('s',this.state)
    }


    switch(tipo){
      case 'Administrador':{
        this.router.navigate(['/homeadmin']);
        break;}
      case 'Juez':{
        if (this.code && this.state && !sessionStorage.getItem('at')){
          this.router.navigate(['/firmaconvenio/']);
        } else {   this.router.navigate(['/homeentidad']); }
        break;}
      case 'Coordinador':{
        this.router.navigate(['/homeentidad']);
        break;
      }
      default:{
        this.router.navigate(['/login']);
        break;
      }
    }
  }

  enviaLogin(){
    this.auth.loginUser(this.login).subscribe(
      res=>{ 
        //console.log(res);
        if (res.logged){
          sessionStorage.setItem('logged',res.logged)
          sessionStorage.setItem('utype',res.tipo)
          sessionStorage.setItem('login', res.userlogin)
          sessionStorage.setItem('entidad', res.entidad)
          let firma:any = (res.firmante=='N')?false:  true;
          sessionStorage.setItem('firmante',firma)
          this.esFirmante=firma
          
          switch(res.tipo){
            case 'Administrador':{
              this.router.navigate(['/homeadmin']);
              break;}
            case 'Juez':{
              this.router.navigate(['/homeentidad']);
              break;}
            case 'Coordinador':{
              this.router.navigate(['/homeentidad']);
              break;
            }
            default:{
              this.router.navigate(['/home']);
              break;
            }
          }
        }
        if (res.estado=='NAP'){
          this.nap=true
        }
       },
      err => { console.log(err)}
    )
  }
}
