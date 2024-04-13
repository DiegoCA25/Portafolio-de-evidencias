import { Mascota } from "./Macota.js";
import { Boton } from "./Boton.js";

const firu = new Mascota("firulais","perro");
const michi = new Mascota ("Michi", "gato");
console.log(michi.saludar());
console.log(firu.saludar());

const btn1 = new Boton("Eliminar", "danger", "btn1", "btnEliminar");
const btn2 = new Boton("Guardar", "success", "btn2", "btnGuardar");
const btn3 = new Boton("Editar", "info", "btn3", "btnEditar");
var div1 = document.querySelector("#div1");
div1.innerHTML= btn1.mostrar()+ btn2.mostrar()+ btn3.mostrar();
