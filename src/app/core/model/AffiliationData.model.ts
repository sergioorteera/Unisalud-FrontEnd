
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

export class Cotizante {
  [key: string]: any;
  constructor(

  ) {}
}



