export class PlanComplementario {

  constructor(
    public id: number = 0,
    public estado: EstadoPlanComplementario,
    public afiliacion: Afiliacion,
    public fechaInicio: Date,
    public fechaFin: Date,
  ) { }

}
