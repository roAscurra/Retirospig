let valorVenta = 0;
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
    document.getElementById('cantidadRetiro').value = `${equivalente.toFixed(2)}`
}
document.addEventListener('DOMContentLoaded', consultarApi(), conversion());