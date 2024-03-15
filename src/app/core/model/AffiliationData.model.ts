
export interface Estado {
  id: number;
  descripcion: string;
}

export interface ActividadEconomica {
  id: number;
  descripcion: string;
}

export interface Sede {
  id: number;
  descripcion: string;
}

export interface EpsAnterior {
  id: number;
  descripcion: string;
}

export interface Discapacidad {
  id: number;
  descripcion: string;
  grado: string;
}

export interface Departamento {
  id: number;
  descripcion: string;
  codigo: string;
  municipios: Municipio[];
}

export interface Municipio {
  id: number;
  descripcion: string;
  codigo: string;
}

export interface Dependencia {
  id: number;
  descripcion: string;
}

export interface Pais {
  id: number;
  descripcion: string;
  codigo: string;
}

export interface Datos {
  estado: Estado[];
  actividadEconomica: ActividadEconomica[];
  sede: Sede[];
  epsAnterior: EpsAnterior[];
  discapacidad: Discapacidad[];
  departamento: Departamento[];
  dependencia: Dependencia[];
  pais: Pais[];
}

export interface AffiliationDataDetail {
  datos: Datos;
}



//AFILIACION COMPLETA
export class AffiliationData {
  [key: string]: any;
  constructor(

  ) {}
}

//CLASES PARA CADA FORMULARIO
export class AreaAfiliaciones {
  [key: string]: any;
  constructor(
    public fechaIngresoSgsss: Date,
    public tipoAfiliacion: number = 0,
    public observacion: string = '',
  ) {}
}

export class DatosCotizante {
  [key: string]: any;
  constructor(
    public tipoIdentificacion: string = '',
    public numeroIdentificacion: string = '',
    public fechaExpedicion: Date,
    public fechaVencimiento: Date,
    public primerApellido: string = '',
    public segundoApellido: string = '',
    public primerNombre: string = '',
    public segundoNombre: string = '',
    public fechaNacimiento: Date,
    public paisNacimiento: number = 0,
    public deptNacimiento: number = 0,
    public ciudadNacimiento: number = 0,
    public grupoEtnico: string = '',
    public grupoPoblacional: string = '',
    public sexo: string = '',
    public orientacionSexual: string = '',
    public estadoCivil: string = '',
    public escolaridad: string = '',
    public profesion: string = '',
    public epsAnterior: number = 0,
    public regimen: string = '',
    public tipoSangre: string = '',
    public rh: string = '',
    public discapacidadFisica: number = 0,
    public discapacidadVisual: number = 0,
    public discapacidadCognitiva: number = 0,
    public discapacidadAuditiva: number = 0,
    public planComplementario: string = '',
    public deptResidencia: number = 0,
    public ciudadResidencia: number = 0,
    public direccionResidencia: string = '',
    public barrio: string = '',
    public zona: string = '',
    public estrato: string = '',
    public celular: string = '',
    public telefono: string = '',
    public correo: string = '',
    public correoAlternativo: string = '',
    public nombreEmer: string = '',
    public direccionEmer: string = '',
    public telefonoEmer: string = '',
    public celularEmer: string = ''
  ) {}
}


