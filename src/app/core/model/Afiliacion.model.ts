export class Afiliacion {

  constructor(
    public id: number = 0,
    public fechaIngresoSgsss: Date,
    public fechaRadicacion: Date,
    public numeroRadicacion: String,
    public observacion: String,
    public tipoAfiliacion: TipoAfiliacion,
    public relacionLaboral: RelacionLaboral,
    public contactoEmergencia: ContactoEmergencia,
    public cotizante: Cotizante,
    public archivo: Archivo,
    public nivelSalarial: NivelSalarial,
  ) { }

}
