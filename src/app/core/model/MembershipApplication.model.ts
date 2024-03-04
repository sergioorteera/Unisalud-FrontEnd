
export class MembershipApplication {

  constructor(
    public fechaIngresoSgsss: Date,
    public observacion: string = '',
    public ibc: string = '',
    public relacionLaboral: RelacionLaboral,
    public cotizante: Cotizante,
    public idTipoAfiliacion: number = 0,
    public contactoEmergencia: ContactoEmergencia,
  ) { }

}

export interface RelacionLaboral {
  cargoActual: string;
  fechaIngresoUnicauca: Date;
  fechaVencimientoContrato: string;
  idDedicacion: number;
  idTipoVinculacion: number;
  provisional: string;
  pension: Pension;
  aportante: Aportante;
  detalleContactoEmpleador: DetalleContactoEmpleador;
}


export interface Cotizante {
  correoElectronico: string;
  correoElectronicoAlternativo: string;
  profesion: string;
  laboraUnicauca: boolean;
  idEpsAnterior: number;
  regimenTraslado: string;
  persona: Persona;
  beneficiarios: Beneficiario[];
}

export interface ContactoEmergencia {
  nombreContactoEmergencia:    string;
  celularContactoEmergencia:   string;
  telefonoContactoEmergencia:  string;
  direccionContactoEmergencia: string;
}

export interface Pension {
  fechaResolucion:  Date;
  numeroResolucion: string;
}

export interface Aportante {
  nombre:               string;
  nit:                  string;
  idActividadEconomica: number;
}

export interface DetalleContactoEmpleador {
  telefono:      string;
  extension:     string;
  idDependencia: number;
  idSede:        number;
}

export interface Persona {
  primerNombre:        string;
  segundoNombre:       string;
  primerApellido:      string;
  segundoApellido:     string;
  tipoRh:              string;
  tipoSangre:          string;
  documento:           Documento;
  idSexo:              number;
  idTipoDocumento:     number;
  idPais:              number;
  idMunicipio:         number;
  idOrientacionSexual: number;
  idGrupoEtnico:       number;
  idEscolaridad:       number;
  idGrupoPoblacional:  number;
  idEstadoCivil:       number;
  idsDiscapacidades?:  number[];
}

export interface Documento {
  numeroDocumento:  string;
  fechaExpedicion:  Date;
  fechaNacimiento:  Date;
  fechaVencimiento: Date;
}

export interface Beneficiario {
  tipoUpcAdicional: string;
  idParentesco:     number;
  persona:          Persona;
}
