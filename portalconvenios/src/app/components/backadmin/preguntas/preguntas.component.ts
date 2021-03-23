import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '@ser/catalogo.service';
import { PageSizes } from 'pdf-lib';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor(
    private c: CatalogoService,
    private fb: FormBuilder,
    private ac: ActivatedRoute
  ) { }

  qa: FormGroup;
  listado: any;
  ngOnInit(): void {
    this.qa = this.fb.group({
      pregunta:['', [Validators.required, Validators.minLength(10)]],
      respuesta:['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]]
    });
    this.listaQA();
  }

  guardaQA(){
    this.c.creaQA(this.qa.value).subscribe(
      res=>{ let paso: any=res; alert(paso.message);
        if (paso.estado=='OK'){ this.ngOnInit() }
      },
      err=>{ console.log(err)}
    )
  }

  listaQA(){
    this.c.listaQA().subscribe(
      res=>{ this.listado = res },
      err=> console.log(err)
    )
  }
}
