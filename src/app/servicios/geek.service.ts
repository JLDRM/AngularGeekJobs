import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Geek } from '../../models/geek';

@Injectable()
export class GeekService {
  // Mocky: private url = 'http://www.mocky.io/v2/5a8c78043000004c00323f3d';
  private url = 'http://localhost:8080';
  usuarios: Geek[];

  constructor(private http: Http) { }

  getUsuarioFromAPI(id: string): Promise<Geek[]> {
    return this.http.get(this.url + '/usuario/' + id)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private handleError(error: Response): Promise<Geek[]> {
    return Promise.reject(error);
  }

  private extractData(res: Response): Promise<Geek[]> {
    return res.json();
  }

  postUsuarioFromForm(data) {
    return this.http.post(this.url + '/usuario/registro', data);
  }

  postLoginUsuario(dat) {
    return this.http.post(this.url + '/usuario/login', dat);

  }
}
