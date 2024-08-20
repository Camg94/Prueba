function encontrarMinimoCambio(monedas) {
    monedas.sort((a, b) => a - b);
  
    let cantidadActual = 0;
  
    for (let i = 0; i < monedas.length; i++) {
      if (monedas[i] > cantidadActual + 1) {
        return cantidadActual + 1;
      }
      cantidadActual += monedas[i];
    }
  
    return cantidadActual + 1;
  }

const monedas = [1, 5, 1, 1, 1, 10, 15, 20, 100];
const minimoCambio = encontrarMinimoCambio(monedas);
console.log("El mínimo cambio que no se puede dar es:", minimoCambio);