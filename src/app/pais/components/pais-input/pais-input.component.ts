import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: []
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder:string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
       .subscribe(
          value => {
                  this.onDebounce.emit(value);

        });
  }

  buscar() {
    //El método buscar de input emite el termino introducido en el barra
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);


  }

}
