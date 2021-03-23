import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CatalogoService } from '@ser/catalogo.service';


@Component({
  selector: 'app-multifirma',
  templateUrl: './multifirma.component.html',
  styleUrls: ['./multifirma.component.css']
})
export class MultifirmaComponent implements OnInit {

  convenios: FormGroup;
  listado: any;
  checkArray: FormArray;
  
  constructor(
    private fb: FormBuilder, 
    private c: CatalogoService
  ) {
    this.convenios = this.fb.group({
      checkArray: this.fb.array([])
    })
  }
  ngOnInit(): void {
    this.listaConvenios();
  }

  onCheckboxChange(e) {
    this.checkArray = this.convenios.get('checkArray') as FormArray;
  
    if (e.target.checked) {
      this.checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      this.checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          this.checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  firmar(){
    let c = confirm('¿Esta seguro firmar los documentos seleccionados?')
    if (c){
      let tagfirmado:string="<p class='btn btn-success btn-sm'>Firmado</p>"
      
      let firmas:any = this.checkArray.value
      firmas.forEach((value:any)=>{
        let data:any={};
        data.firma2=sessionStorage.login
        data.documento = value
        this.c.firmaConvenioFirma2(data).subscribe(
          res=>{ let paso:any = res; 
            if (paso.estado=='OK'){
              document.getElementById('estado_'+value).innerHTML=tagfirmado
              document.getElementById('ck_'+value).innerHTML=''
              console.log('firmado')
            }
          }
        )
      });
   }
  }

  listaConvenios(){
    this.c.listaConveniosPorFirmar().subscribe(
      res=>{ this.listado = res; },
      err=> console.log(err)
    )
  }
}
