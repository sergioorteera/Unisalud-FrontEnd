export class PersonaUbicacion {

  constructor(
    public id: number = 0,
    public ubicacionContacto: UbicacionContacto,
    public persona: Persona,
  ) { }

}
