import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Ajax } from './../perfil-usuario/ajax';
import 'rxjs/add/operator/toPromise';

import { Geek } from '../../models/geek';

@Injectable()
export class GeekService {
  private url = 'http://www.mocky.io/v2/5a8c78043000004c00323f3d';
  usuarios: Geek[];

  constructor(private http: Http) { }

  getUsuarioFromMocky(): Promise<Geek[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private handleError(error: Response): Promise<any> {
    return Promise.reject(error);
  }

  private extractData(res: Response): Promise<Geek[]> {
    return res.json();
  }
}
