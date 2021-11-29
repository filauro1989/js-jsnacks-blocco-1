// let i = 0;
// let sum = 0

// while (i < 10) {
//     const numero = parseInt(prompt('inserisci un numero'));
//     sum += numero;
//     i++

//     console.log(numero);
//     console.log(sum);
// }

// ciclo FOR 

let sum = 0

for (let index = 0; index < 10; index++) {
    const numero = parseInt(prompt('inserisci un numero'));
    sum += numero;
    
    console.log('numero utente', numero);
    console.log('somma', sum);
}