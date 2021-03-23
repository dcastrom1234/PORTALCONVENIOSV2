import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';

@Component({
  selector: 'app-creacoordinador',
  templateUrl: './creacoordinador.component.html',
  styleUrls: ['./creacoordinador.component.css']
})
export class CreacoordinadorComponent implements OnInit {
  coo: any;
  comunas: any;

  frm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.frm = this.fb.group({
      usrnombre:['', Validators.required],
      usremail:['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")]],
      usrtelefono:['', [Validators.required, Validators.pattern("^[0-9+]{9,12}$")]],
      usrgenero:['', Validators.required],
      usrrun:['', Validators.pattern("^[0-9\.]{6,10}\-[0-9kK]{1}$")],
      usrclave:['',[Validators.required,Validators.minLength(6)]],
      entidad:[''],
      cargo:['']
    })
  }

  ngOnInit(): void {
  }


  registrar(){
    this.frm.patchValue({entidad:sessionStorage.getItem('entidad'),cargo:2})
    console.log(this.frm.value)
    this.auth.registroUsuario(this.frm.value).subscribe(
      res=>{ alert(res.mensaje); this.router.navigate(['/homeentidad']); },
      err=> console.log(err)
    )
  }
}
