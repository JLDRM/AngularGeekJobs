import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../../models/empresa';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmpresaService {
  private url = 'http://localhost:8080/';
  empresas: Empresa[];

  constructor(private http: Http) { }

  postEmpresaForm(dta) {
    return this.http.post(this.url + 'empresa/registro', dta);
  }
  postLoginEmpresa(data) {
    return this.http.post(this.url + 'empresa/login', data);
  }
}
