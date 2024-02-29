export class Beneficiario {

  constructor(
    public id: number = 0,
    public beneficiarioAsociado: number,
    public tipoUpcAdicional: TipoUpcAdicional,
    public parentesco: Parentesco,
    public persona: Persona,
    public cotizante: Cotizante,
    public archivos: Archivo[] = [],
    public beneficiarios: Beneficiario[] = [],
  ) { }

}
