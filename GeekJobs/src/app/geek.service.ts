import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Ajax } from './perfil-usuario/ajax';

@Injectable()
export class GeekService {

  constructor() { }


  getUsuarios(): any {
    Ajax('GET', 'http://www.mocky.io/v2/5a7190212f000035127762e5', (data) => {
      return data;
    });
  }
}
