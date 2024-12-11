//Converta uma temperatura de Celsius para Fahrenheit.

function converterrcelsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const temperaturaCelsius = 25;
const temperaturaFahrenheit = converterrcelsiusParaFahrenheit(temperaturaCelsius);

console.log(`${temperaturaCelsius}C é equivalente a ${temperaturaFahrenheit}F`);