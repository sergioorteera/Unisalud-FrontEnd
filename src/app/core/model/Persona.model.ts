export class Persona {

  constructor(
    public id: number = 0,
    public serialBdua: number,
    public primerNombre: String,
    public segundoNombre: String,
    public primerApellido: String,
    public segundoApellido: String,
    public tipoRh: TipoRh,
    public tipoSangre: TipoSangre,
    public tipoDocumento: TipoDocumento,
    public documento: Documento,
    public sexo: Sexo,
    public orientacionSexual: OrientacionSexual,
    public grupoEtnico: GrupoEtnico,
    public escolaridad: Escolaridad,
    public grupoPoblacional: GrupoPoblacional,
    public estadoCivil: EstadoCivil,
    public municipio: Municipio,
    public pais: Pais,
    public archivos: Archivo[] = [],
  ) { }

}
