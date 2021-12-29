import { Impuestos } from "./impuestos.js";

export class Clientes {
  constructor(nombre, impuesto) {
    
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  get nombre() {
    return this._nombre;
  }

  set nombre(nuevonombre) {
    this._nombre = nuevonombre;
  }

  calcularimpuesto() {
    return (this._impuesto.montobrutoanual - this._impuesto.deducciones)*0.21;
    
  }


}
