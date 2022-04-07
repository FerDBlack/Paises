import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap,tap} from "rxjs";
import {PaisService} from "../../services/pais.service";
import {RespCountriesType} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!:RespCountriesType[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private  paisService:PaisService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(//de esta manera se desestructura param para coger solo le id
        switchMap(({id}) => this.paisService.buscarPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(pais =>{this.pais=pais;});
  /*  this.activatedRoute.params
      .subscribe(({id}) =>{
        this.paisService.buscarPaisPorCodigo(id).subscribe(
          pais =>
          {console.log(pais)})
      });*/
  }

}
