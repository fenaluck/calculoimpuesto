export class Impuestos {
  constructor(monto_bruto_anual, deducciones) {
    this._montobruto = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  get montobrutoanual() {
    return this._montobruto;
  }
  set montobrutoanual(nuevomonto) {
    this._montobruto = nuevomonto;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(nuevadeducciones) {
    this._deducciones = nuevadeducciones;
  }
}
