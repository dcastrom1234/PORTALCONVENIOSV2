import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';
import { CatalogoService } from '@ser/catalogo.service';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html',
  styleUrls: ['./registro2.component.css']
})
export class Registro2Component implements OnInit {

  reg: FormGroup;
  regusuarios: FormGroup;
  paso2: boolean=false;
  comunas: any;
  tipoentidad: any;
  entid: any;

  constructor(  
        private auth: AuthService,
        private router: Router,
        private fb : FormBuilder,
        private c: CatalogoService
  ){  
    this.reg = this.fb.group({
      entnombre:['',Validators.required],
      entdireccion:['', Validators.required],
      entcomuna:['', Validators.required],
      tipo:['', Validators.required]
    })

    this.regusuarios = this.fb.group({
      usrnombre:['', Validators.required],
      usremail:['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")]],
      usrtelefono:['', [Validators.required, Validators.pattern("^[0-9+]{9,12}$")]],
      usrgenero:['', Validators.required],
      usrrun:['', Validators.pattern("^[0-9\.]{6,10}\-[0-9kK]{1}$")],
      usrclave:['', [Validators.required,Validators.minLength(6)]],
      entidad:[''],
      cargo:[''],
      autoridad:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.listaComunas();
    this.listaEntidad();
  }


  registroEntidad(){
    if (confirm('Confirma que toda la información ingresada es correcta?')){
      this.auth.registroEntidad(this.reg.value).subscribe(
        res => { this.paso2 = true; this.entid = res.id; },
        err=> console.log(err)
      )
    }
  }

  registroUsuarios(){
    this.regusuarios.patchValue({entidad:this.entid,cargo:1})
    this.auth.registroUsuario(this.regusuarios.value).subscribe(
      res=>{ alert(res.mensaje); this.router.navigate(['/login']); },
      err=> console.log(err)
    )
  }

  listaComunas(){
    this.c.listaComunas().subscribe(
      res=>{ this.comunas = res },
      err=>{ console.log(err) }
    )
  }

  listaEntidad(){
    this.c.listaEntidades().subscribe(
      res=>{ this.tipoentidad = res },
      err=>{ console.log(err)}
    )
  }
}
