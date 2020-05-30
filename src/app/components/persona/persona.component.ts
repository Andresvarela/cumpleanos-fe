import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona/Persona';
import { PersonaService } from '../../services/persona.service';



@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona: Persona = new Persona;
  mensaje: boolean = false;
  guardar: boolean = false;
  cumple: boolean = true;
  today: Date = new Date;


  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  }

  savePersona() {
    console.log(this.persona);
    this.personaService.newPersona(this.persona).subscribe((data: any) => {
      this.guardar = true;
      this.persona = data;

      if (this.persona.mensajeCumpleano !== null) {
        this.mensaje = true;
        if (this.persona.mensajeCumpleano.includes('Restan')) {
          this.cumple = true;
        }else{
          this.cumple = false;
        }
      }
    });
  }

  limpiar() {
    this.guardar = false;
    this.mensaje = false;
    this.persona.nombre = null;
    this.persona.apellido = null;
    this.persona.fechaNacimiento = null;
    this.persona.edad = null;
    this.persona.mensajeCumpleano = null;
    this.cumple = true;
  }

}
