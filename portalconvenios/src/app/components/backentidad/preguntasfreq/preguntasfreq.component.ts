import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoService } from '@ser/catalogo.service';

@Component({
  selector: 'app-preguntasfreq',
  templateUrl: './preguntasfreq.component.html',
  styleUrls: ['./preguntasfreq.component.css']
})
export class PreguntasfreqComponent implements OnInit {

  constructor(
    private c: CatalogoService,
    private router: Router
  ) { }
  
  listado: any;

  ngOnInit(): void {
    this.listaQA();
  }

  listaQA(){
    this.c.listaQA().subscribe(
      res=>{ this.listado = res },
      err=> console.log(err)
    )
  }
}
