import { Clientes } from "./cliente.js";
import { Impuestos } from "./impuestos.js";


$('form').on('submit', (ev)=>{
    ev.preventDefault();

    const montototal = parseInt($("#Monto").val());
    const nombre = $("#cliente").val();
    const deducciones = parseInt($("#deducciones").val());

    const impuestonuevo = new Impuestos(montototal, deducciones);
    const clientenuevo = new Clientes(nombre, impuestonuevo);

    $("#resultado").html(clientenuevo.calcularimpuesto());

})