import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona/Persona';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  persona: {};
  private endpoint = `${environment.personaEndpoint + environment.persona}`;
  constructor(private httpClient: HttpClient) {}

  newPersona(persona: Persona): Observable<object> {
  return this.httpClient.post(this.endpoint, persona);
  }
}
