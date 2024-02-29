export class Departamento {

  constructor(
    public id: number = 0,
    public descripcion: String,
    public codigo: String,
    public municipios: Municipio[] = [],
  ) { }

}
