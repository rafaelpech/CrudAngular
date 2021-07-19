import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  productoURL = "http://localhost:3030/";

  constructor(private httpClient: HttpClient) {  }

  public getAll(): Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(`${this.productoURL}api/contact`);
  }

  public create(contact: Contact): Observable<any>{
    return this.httpClient.post<any>(`${this.productoURL}api/contact`, contact);
  }

  public getOne(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.productoURL}api/contact/${id}`);
  }

  public update(id: number, contact: Contact): Observable<any> {
    return this.httpClient.patch<any>(`${this.productoURL}api/contact/${id}`, contact);
  }

  public delete(contact: Contact): Observable<any> {
    const id = contact.id;
    return this.httpClient.patch<any>(`${this.productoURL}api/contact/delete/${id}`, contact);
  }
}

export interface Contact {
    id?: Number;
    nombre: string;
    apellido: string;
    telefono: string;
    correo:string;
    edad: number;
    activo: number;
}