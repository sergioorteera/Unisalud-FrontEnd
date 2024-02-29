export class Municipio {

  constructor(
    public id: number = 0,
    public descripcion: String,
    public codigo: String,
    public departamento: Departamento,
  ) { }

}
