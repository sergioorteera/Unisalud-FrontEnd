export class DetalleContactoEmpleador {

  constructor(
    public telefono: String,
    public extension: String,
    public dependencia: Dependencia,
    public sede: Sede,
  ) { }

}
