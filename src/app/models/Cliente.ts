export class Cliente {
  idCliente: string;
  nombreRazonSocial: string;
  tipoDocumento: string;
  numeroDocumento: string;
  telefonoCliente: string;
  correoCliente: string;
  direccionCliente: string;

  constructor(
    idCliente: string,
    nombreRazonSocial: string,
    tipoDocumento: string,
    numeroDocumento: string,
    telefonoCliente: string,
    correoCliente: string,
    direccionCliente: string
  ) {
    this.idCliente = idCliente;
    this.nombreRazonSocial = nombreRazonSocial;
    this.tipoDocumento = tipoDocumento;
    this.numeroDocumento = numeroDocumento;
    this.telefonoCliente = telefonoCliente;
    this.correoCliente = correoCliente;
    this.direccionCliente = direccionCliente;
  }
}
