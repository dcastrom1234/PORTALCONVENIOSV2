import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@ser/auth.service';

@Component({
  selector: 'app-usuariosadmin',
  templateUrl: './usuariosadmin.component.html',
  styleUrls: ['./usuariosadmin.component.css']
})
export class UsuariosadminComponent implements OnInit {
  regusuarios: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { 
    this.regusuarios = this.fb.group({
      usrnombre:['', Validators.required],
      usremail:['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")]],
      usrtelefono:['', [Validators.required, Validators.pattern("^[0-9+]{9,12}$")]],
      usrgenero:['', Validators.required],
      usrrun:['', Validators.pattern("^[0-9\.]{6,10}\-[0-9kK]{1}$")],
      usrclave:['', [Validators.required,Validators.minLength(6)]],
      entidad:[''],
      cargo:['']
    })
  }

  ngOnInit(): void {
  }

  registroUsuarios(){
    this.regusuarios.patchValue({entidad:1,cargo:3})
    this.auth.registroUsuario(this.regusuarios.value).subscribe(
      res=>{ alert(res.mensaje); this.router.navigate(['/login']); },
      err=> console.log(err)
    )
  }
}
