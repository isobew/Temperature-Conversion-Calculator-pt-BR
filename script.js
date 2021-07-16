//CONVERSÃO DE ESCALAS
//DE FAHRENHEIT PARA CELSIUS -----> C/5 = F-32/9 => C*9 = (F-32)*5 
//DE CELSIUS PARA FAHRENHEIT -----> C/5 = F-32/9 => (F-32)*5 = C*9
//DE KELVIN P CELSIUS ----> C = K - 273
//DE CELSIUS PARA KELVIN: C = K - 273 => K = 273 + C
//DE FAHRENHEIT PARA KELVIN = (K - 273)*9 = (F-32)*5
//DE KELVIN PARA FAHRENHEIT = (F-32)*5 = (K - 273)*9

/*---- CONVERSÕES SIMPLICADAS ----*/
//FAHRENHEIT
//F = (((K - 273)*9)/5) + 32
//F = ((C*9)/5) + 32

//KELVIN
//K = (((F-32)*5)/9) + 273
//K = 273 + C

//CELSIUS
//C = K - 273
//C = ((F-32)*5)/9

function KparaF(deKelvinParaFahr) {
    let kelvinUm = document.getElementById('valork1').value;
    deKelvinParaFahr = parseFloat((((kelvinUm - 273) * 9) / 5) + 32).toFixed(1);
    document.getElementById('valordekpf').innerHTML = `O valor de ${kelvinUm}K é = ${deKelvinParaFahr}ºF`;
}

function CparaF(deCelsiusParaFahr) {
    let celsiusUm = document.getElementById('valorc1').value;
    deCelsiusParaFahr = parseFloat(((celsiusUm * 9) / 5) + 32).toFixed(1);
    document.getElementById('valordecpf').innerHTML = `O valor de ${celsiusUm}ºC é = ${deCelsiusParaFahr}ºF`;
}

function FparaK(deFahrParaKelvin) {
    let fahrUm = document.getElementById('valorf1').value;
    deFahrParaKelvin = parseFloat((((fahrUm - 32) * 5) / 9) + 273).toFixed(1);
    document.getElementById('valordefpk').innerHTML = `O valor de ${fahrUm}ºF é = ${deFahrParaKelvin}K`;
}

function CparaK(deCelsiusParaKelvin) {
    let celsiusDois = document.getElementById('valorc2').value;
    deCelsiusParaKelvin = parseFloat(273 + celsiusDois).toFixed(1);
    document.getElementById('valordecpk').innerHTML = `O valor de ${celsiusDois}ºC é = ${deCelsiusParaKelvin}K`;
}

function KparaC(deKelvinParaCelsius) {
    let kelvinDois = document.getElementById('valork2').value;
    deKelvinParaCelsius = parseFloat(kelvinDois - 273).toFixed(1);
    document.getElementById('valordekpc').innerHTML = `O valor de ${kelvinDois}K é = ${deKelvinParaCelsius}ºC`;
}

function FparaC(deFahrParaCelsius) {
    let fahrDois = document.getElementById('valorf2').value;
    deFahrParaCelsius = parseFloat(((fahrDois - 32) * 5) / 9).toFixed(1);
    document.getElementById('valordefpc').innerHTML = `O valor de ${fahrDois}ºF é = ${deFahrParaCelsius}ºC`;
}