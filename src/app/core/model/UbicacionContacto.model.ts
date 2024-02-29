export class UbicacionContacto {

  constructor(
    public id: number = 0,
    public celular: String,
    public telefono: String,
    public barrio: String,
    public direccion: String,
    public zona: ZonaUbicacion,
    public estrato: Estrato,
    public municipio: Municipio,
  ) { }

}
