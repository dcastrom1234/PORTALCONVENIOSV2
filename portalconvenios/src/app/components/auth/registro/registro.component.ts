import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';
import { Entidad } from '@mods/entidad.model';
import { CatalogoComponent } from '@com/backentidad/catalogo/catalogo.component';
import { CatalogoService } from '@ser/catalogo.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    reg: FormGroup;
    enti: Entidad;
    valido: boolean = false;
    comunas: any;
    constructor(  
          private auth: AuthService,
          private router: Router,
          private fb : FormBuilder,
          private c: CatalogoService
    ){  
      this.reg = this.fb.group({
        entname:['',Validators.required],
        entowner:['',Validators.required],
        entownermail:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        entownerphone:['',[Validators.required, Validators.pattern("^[0-9+]{9,12}$")]],
        entownerrun:['',[Validators.required, Validators.pattern("^[0-9\.]{6,10}\-[0-9kK]{1}$")]],
        entaddress:['', Validators.required],
        entcomuna:['', Validators.required],
        entownergenero:['']
      })
    }

    ngOnInit(): void {
      this.listaComunas();
    }

    registrar(){
      console.log(this.reg.value)
      if (confirm('Confirma que toda la información ingresada es correcta?')){
        this.auth.registroUsuario(this.reg.value).subscribe(
          res=> { alert( res.mensaje ) ; this.router.navigate(['/login']); },
          err=> console.log(err)
        )
      }
    }

    listaComunas(){
      this.c.listaComunas().subscribe(
        res=>{ this.comunas = res },
        err=>{ console.log(err) }
      )
    }

}