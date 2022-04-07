import { Component, OnInit } from '@angular/core';
import {RespCountriesType} from "../../interfaces/pais.interface";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  error: boolean = false;
  resultadosPaises: RespCountriesType[] = []


  constructor(private paisService: PaisService) {
  }

  ngOnInit(): void {
  }

  buscar(termino :string) {
    this.error = false;
    //Una vez recibido del input el termino se le asigna al atributo de por país
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
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




}
