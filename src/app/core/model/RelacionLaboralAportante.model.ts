export class RelacionLaboralAportante {

  constructor(
    public id: number = 0,
    public ibc: number,
    public periodo: String,
    public aportante: Aportante,
    public relacionLaboral: RelacionLaboral,
    public clasificacionAportante: ClasificacionAportante,
  ) { }

}
