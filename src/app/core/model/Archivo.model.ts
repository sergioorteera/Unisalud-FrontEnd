export class Archivo {

  constructor(
    public id: number = 0,
    public ruta: String,
    public fechaAlmacenamiento: Date,
    public tipo: String,
    public persona: Persona,
    public beneficiario: Beneficiario,
  ) { }

}
