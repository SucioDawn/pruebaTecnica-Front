import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  constructor(private http: HttpClient) {}

  public enviarContacto(contacto: {
    
    nombreCompleto: string,
    nombreEmpresa: string,
    correo: string,
    telefono: string,
    categoria: string,
    mensaje: string
  }) {
    console.log(contacto);
    const url = 'http://localhost:3000/api/v1/contacto';
    return this.http.post(url, contacto);
  }
}

