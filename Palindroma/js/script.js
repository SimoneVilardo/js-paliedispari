// VARIABILE CHE PERMETTE ALL' UTENTE DI INSERIRE UNA PAROLA

let parola_utente = prompt('Inserisci una parola').toLowerCase();

// FUNZIONE SPLIT
 let parola_array = parola_utente.split('');
 console.log(parola_array);

//  FUNZIONE REVERSE
let parola_contrario = parola_array.reverse();
console.log(parola_contrario);

// FUNZIONE JOIN
let contrario = parola_contrario.join('');
console.log(contrario);

// CONDIZIONE

if (contrario === parola_utente){
    console.log('La parola è PALINDROMA')
}
else {
    console.log('La parola NON è PALINDROMA')
}
