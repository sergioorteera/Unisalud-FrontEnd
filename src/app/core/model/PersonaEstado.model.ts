export class PersonaEstado {

  constructor(
    public id: number = 0,
    public fechaInicio: Date,
    public fechaFin: Date,
    public persona: Persona,
    public estado: Estado,
    public tipoEstado: TipoEstado,
  ) { }

}
