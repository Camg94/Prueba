function switchPositions(Numbers, S){
    const resultado = [];

numbers.forEach(number => {

    const filteredDigits = String(number) 
        .split('')
        .filter((digit) => digit < S)
        .join('');


        if(filteredDigits.length > 0 && Number(filteredDigits) !== 0){
            resultado.push(Number(filteredDigits));
        }
    });
}
const numbers =  [19, 29, 39, 39, 59, 69, 79, 89, 99];
const S = 9;
switchPositions(numbers, S)





