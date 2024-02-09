// Conversor de Temperatura:

// Desenvolva um programa que converta uma temperatura de Celsius para Fahrenheit. Peça ao usuário que insira a temperatura em Celsius e imprima o resultado.

class ConversorDeTemperatura {
    tempCelsius: number;
    tempFahrenheit: number;

    converter():void {
        this.tempFahrenheit = (this.tempCelsius * 1.8) + 32;

        console.log(`A temperatura em Celsius (${this.tempCelsius}°C) convertida em temperatura Fahrenheit é ${this.tempFahrenheit}°F.`);
    }

    constructor(tempCelsius: number) {
        this.tempCelsius = tempCelsius;
        this.tempFahrenheit = 0;
    }
}

const conversao1 = new ConversorDeTemperatura(30);
conversao1.converter();