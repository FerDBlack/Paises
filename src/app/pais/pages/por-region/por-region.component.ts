import {Component, OnInit} from '@angular/core';
import {RespCountriesType} from "../../interfaces/pais.interface";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {


  regiones: string[] = ['europe', 'caribbean', 'africa', 'oceania', 'asia', 'americas','north america'];
  regionActiva: string = '';
  resultadosPaises: RespCountriesType[] = [];
  error: boolean = false;

  constructor(private paisService: PaisService) {
  }

  ngOnInit(): void {
  }

  activarRegion(region: string) {

    if (region===this.regionActiva){return;}
    this.regionActiva = region
    this.resultadosPaises = []
    this.paisService.buscarRegion(this.regionActiva)
      .subscribe(paises => {
          this.resultadosPaises = paises;
        },
        error => {this.error = true; console.info(error);this.resultadosPaises = [];
        });
  }

  estiloCss(region: string): string {
    return (region == this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }


}
