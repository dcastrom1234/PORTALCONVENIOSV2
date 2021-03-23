import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';
import { CatalogoService } from '@ser/catalogo.service';


@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements AfterViewInit {

  @ViewChild('data') data: ElementRef;

  servicios: any;
  listado: any;
  paso: any[];
  mensaje:any;
  constructor(
    private router: Router,
    private c: CatalogoService,
    private auth: AuthService,
    private render: Renderer2,
    private sanitizer: DomSanitizer
  ) { }

    ngOnInit(){
      //this.cargaMatriz();
    }

  ngAfterViewInit(){
    this.cargaMatriz();
  }

  cargaMatriz(){
    this.c.listaNombreServicios().subscribe(
      res=>{ this.servicios = res },
      err=> console.log(err)
    )

    this.c.matriz().subscribe(
      res=>{ this.listado = res; 
        console.log(this.listado)

        for(let a of this.listado){
          const x = a.split('|')
          const tr = this.render.createElement('tr')
          for(let i=0;i<x.length;i++){
            const td = this.render.createElement('td')
            if (i==0){
              this.render.setProperty(td,'innerHTML',x[i])
              this.render.setProperty(td,'align','right')
              this.render.addClass(td,'normal')
              this.render.appendChild(tr,td) 
              this.render.appendChild(this.data.nativeElement,tr)
              const td2 = this.render.createElement('td')
              const btall=this.render.createElement('button')
              this.render.listen(btall,'click', event=>{ this.activaTodos(x[1])})

              this.render.setProperty(btall,'innerHTML','Todos')
              this.render.addClass(btall,'btn')
              this.render.addClass(btall,'btn-info')
              this.render.appendChild(td2,btall)
              this.render.appendChild(tr,td2) 
            } else {
              const bt = this.render.createElement('button')
              this.render.listen(bt,'click', event=>{ this.accionServicio(x[i])})
              let b = x[i].split("-")
              let texto=(b[0]=="OK")?"<img src='assets/icon/check.png' alt='activo' />":"<img src='assets/icon/nocheck.png' alt='no activo' />"
              let estilo=(b[0]=="OK")?"btn-success":"btn-danger"
              this.render.setProperty(bt,'innerHTML',texto)
              this.render.addClass(bt,'btn')
              this.render.addClass(bt,estilo)
              this.render.appendChild(td,bt)
              this.render.appendChild(tr,td) 
            }
            
            
          }
          this.render.appendChild(this.data.nativeElement,tr)
        }
      
      },
      err=> console.log(err)
    )
    
  }

  limpiaElementos(){
    const myEl = this.data.nativeElement;
    while(myEl.firstChild) {
      this.render.removeChild(myEl, myEl.lastChild);
    }
  }

  activaTodos(x){
    console.log('todos '+x)

    let c = confirm('Está seguro que quiere activar este servicio para todas las entidades?');
    if (c){
      this.c.activaTodosLosServicios(x).subscribe(
        res=>{ this.mensaje = res; 
          this.limpiaElementos();
          this.cargaMatriz();
        },
        err=>console.log(err)
      )

    }

  }
  accionServicio(servicio){
    let x = servicio.split("-")
    if (x[0]=="OK"){
      let caso = confirm('Está seguro que quiere deshabilitar este servicio?')
      if (caso){
          this.c.activacionServicios(servicio).subscribe(
          res=>{ this.mensaje=res;
            alert(this.mensaje.mensaje);
            this.limpiaElementos();
            this.cargaMatriz()
          },
          erro=>console.log(erro)
        )
      } 
      } else {
        let caso = confirm('Está seguro que quiere habilitar este servicio?')
        if (caso) {
            this.c.activacionServicios(servicio).subscribe(
            res=>{ this.mensaje=res;
              alert(this.mensaje.mensaje);
              this.limpiaElementos();
              this.cargaMatriz()
            },
            erro=>console.log(erro)
          )
        }
      }
  }

}
