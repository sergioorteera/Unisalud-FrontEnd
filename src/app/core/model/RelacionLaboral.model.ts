export class RelacionLaboral {

  constructor(
    public id: number = 0,
    public cargoActual: String,
    public fechaIngresoUnicauca: Date,
    public fechaVencimientoContrato: Date,
    public tipoVinculacion: TipoVinculacion,
    public dedicacion: Dedicacion,
    public provisional: Provisional,
    public detalleContactoEmpleador: DetalleContactoEmpleador,
    public pension: Pension,
  ) { }

}
