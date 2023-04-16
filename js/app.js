let valorVenta = 0;
const button = document.getElementById('boton')
function precioVenta(precio){
    return precio - (precio*6.5/100)
}
function consultarApi(){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=ARS`;
    fetch(url)
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            valorVenta=precioVenta(resultadoJson.RAW.USDT.ARS.PRICE)
            console.log(valorVenta)
        })
        .catch(error => console.log(error));
}
function conversion(cant){
    let equivalente = cant * valorVenta;
    document.getElementById('cantidadARS').value = `$ ${equivalente.toFixed(2)} ARS `
}
button.disabled = true;
function habilitarBoton(){
    let nombre = document.getElementById('nombreApellido').value;
    let cuenta = document.getElementById('cuenta').value;
    let cantidadUSD = document.getElementById('cantidadUSD').value;
    let caja = document.getElementById('tipoCaja').value;
    let des = 0;

    if(nombre == ''){
        des++;
    }
    if(cuenta.length < 6 || cuenta.length >= 23){
        des++;
    }
    if(cantidadUSD == ''){
        des++;
    }
    if(caja == '0'){
        des++;
    }
   if(des===0){
    button.disabled = false;
   }else{
    button.disabled = true;
   }
}
document.getElementById('tipoCaja').addEventListener('change',habilitarBoton);
document.getElementById('form').addEventListener('keyup',habilitarBoton);
document.addEventListener('DOMContentLoaded', consultarApi());