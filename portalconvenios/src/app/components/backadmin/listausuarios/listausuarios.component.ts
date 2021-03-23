import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';


@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.css']
})
export class ListausuariosComponent implements OnInit {
  
  constructor(
    private auth:AuthService,
    private router: Router
  ) { }
  usuarios: any;
  filUser: any=""

  ngOnInit():void {
    this.listaUsuarios();
  }

  listaUsuarios(){
    return this.auth.listaUsuarios().subscribe(
      res=>{ this.usuarios = res },
      err=>{console.log(err) }
    )
  }
  
  cambiaEstadoUsuario(u){
    let paso:any;
    let c = confirm('Está seguro que quiere cambiar el estado de este usuario?');
    if (c){ 
      return this.auth.cambiaEstadoUsuario(u).subscribe(
        res=> { paso = res 
          alert(paso.message);
          this.ngOnInit();
        },
        err=>console.log(err)
      )

    }
  }
}
