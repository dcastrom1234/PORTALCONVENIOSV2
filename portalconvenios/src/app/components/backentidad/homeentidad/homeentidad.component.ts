import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';
import { CatalogoService } from '@ser/catalogo.service';

@Component({
  selector: 'app-homeentidad',
  templateUrl: './homeentidad.component.html',
  styleUrls: ['./homeentidad.component.css']
})
export class HomeentidadComponent implements OnInit {
  menuLista: any;
  router: any;
  state: any;
  code: any;
  coordinador:boolean=false;

  constructor(
    private c: CatalogoService,
    private r: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    let urlTree = this.r.parseUrl(this.r.url);
    this.state = urlTree.queryParams['state'];
    this.code = urlTree.queryParams['code'];

    if (this.code && this.state && sessionStorage.getItem('utype')!='Administrador'){
      this.r.navigate(['/firmaconvenio/'],{ queryParams:{code:this.code, state: this.state}});
    } else {
      if (this.code && this.state && sessionStorage.getItem('utype')=='Administrador'){
        this.r.navigate(['/firmante/'],{ queryParams:{code:this.code, state: this.state}});
      }
    }

    this.menu()
  }

  menu(){
    let utype = sessionStorage.getItem('utype')
    return this.c.menu(utype).subscribe(
      res=> {
        this.menuLista = res
        console.log(res)
      },
      err => console.log(err)
    )
  }


  revisaCoordinador(){
    
  }
}
