function cuadradosOrdenados(numeros, S) {
   
    const cuadrados = [];
  
    
    for (let num of numeros) {
      const cuadrado = num * num;
  
      if (cuadrado <= S * S) {
        cuadrados.push(cuadrado);
      }
    }
  
    cuadrados.sort((a, b) => a - b);
  
    return cuadrados;
  }

const numeros = [1, 2, 3, 5, 6, 8, 9, 10];
const S = 9;
const resultado1 = cuadradosOrdenados(numeros, S);
console.log(resultado1); // Output: [0, 1, 9]