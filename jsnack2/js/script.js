const invitati = [
    'giacomo',
    'luca',
    'fabio',
    'piero',
    'antonio'
]

const nomeUtente = prompt('Digita il tuo nome').toLowerCase();

// devo controllare nella lista invitati se c'è il nome 
console.log(invitati);

let find = false;
// let i = 0;

// while (i < invitati.length && find == false) {
    
//     if (nomeUtente == invitati[i]) {
//         find = true;
//     }
//     i++
// };

// if (find == true) {
//     alert('Perfetto, il tuo nome è nella lista')
// } else {
//     alert('Mi dispiace il tuo nome non è nella lista')
// };

for (let index = 0; index < invitati.length; index++) {

    if (nomeUtente == invitati[index]) {
        find = true;
    }
    
}

if (find == true) {
    alert('Perfetto, il tuo nome è nella lista')
} else {
    alert('Mi dispiace il tuo nome non è nella lista')
};
