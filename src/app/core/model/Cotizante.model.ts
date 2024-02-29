export class Cotizante {

  constructor(
    public id: number = 0,
    public conyugeAsociado: number,
    public correoElectronico: String,
    public correoElectronicoAlternativo: String,
    public profesion: String,
    public laboraUnicauca: Boolean,
    public epsAnterior: EpsAnterior,
    public regimenTraslado: RegimenTraslado,
    public persona: Persona,
    public beneficiarios: Beneficiario[] = [],
  ) { }

}
