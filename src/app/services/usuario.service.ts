import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi = 'http://localhost:8080/usuario';

  constructor(private http:HttpClient) { }

  public getAllClientes(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.urlApi}`);
  }

  public getCliente(id: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.urlApi}/?id=${id}`);
  }

  public addCliente(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.urlApi}/`, usuario, { headers });
  }

  public updateCliente(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.urlApi}/`, usuario, { headers });
  }

  public deleteCliente(id: string): Observable<any> {
    return this.http.delete(`${this.urlApi}/?id=${id}`);
  }
}
