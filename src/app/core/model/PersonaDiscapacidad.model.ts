export class PersonaDiscapacidad {

  constructor(
    public id: number = 0,
    public fechaInicio: Date,
    public fechaFin: Date,
    public persona: Persona,
    public discapacidad: Discapacidad,
  ) { }

}
