export class Usuario {
  idUsuario: string;
  nombre: string;
  correoElectronico: string;
  contraseña: string;
  direccion: string;
  numeroTelefono: string;

  constructor(
    idUsuario: string,
    nombre: string,
    correoElectronico: string,
    contraseña: string,
    direccion: string,
    numeroTelefono: string
  ) {
    this.idUsuario = idUsuario;
    this.nombre = nombre;
    this.correoElectronico = correoElectronico;
    this.contraseña = contraseña;
    this.direccion = direccion;
    this.numeroTelefono = numeroTelefono;
  }
}
