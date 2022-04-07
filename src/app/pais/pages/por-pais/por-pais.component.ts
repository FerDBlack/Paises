import {Component, OnInit} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {RespCountriesType} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

   termino: string = '';
   error: boolean = false;
   mostrarSugerencia: boolean = false;
   resultadosPaises: RespCountriesType[] = []
   resultadosPaisesSugeridos: RespCountriesType[] = []

  constructor(private paisService: PaisService) {
  }

  ngOnInit(): void {
  }

  buscar(termino :string) {
    this.error = false;
    //Una vez recibido del input el termino se le asigna al atributo de por país
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
      .subscribe(
        paises => {
          this.resultadosPaises = paises;
        },
        error => {
          this.error = true;
          console.info(error);
          this.resultadosPaises = [];
        });
  }

  sugerencias(termino:string){
    this.error = false;
    this.mostrarSugerencia = true;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe(paises => this.resultadosPaisesSugeridos = paises.splice(0,5),
        error => this.resultadosPaisesSugeridos = [],
        );
  }

  buscarSugerido(termino:string){
    this.mostrarSugerencia = false
    this.buscar(termino);
  }

}
