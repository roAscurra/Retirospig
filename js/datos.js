import { insertRetiros } from "./firebase.js";

const datos = document.getElementById('form');

datos.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(2)
    const nombre = datos['nombreApellido'];
    const cuenta = datos['cuenta'];
    const cantidaUSD = datos['cantidadUSD'];
    const cantidadARS = datos['cantidadARS'];
    const caja = datos['tipoCaja'];
    insertRetiros(nombre.value, cuenta.value, cantidaUSD.value, cantidadARS.value, caja.value);
    datos.reset();
})
