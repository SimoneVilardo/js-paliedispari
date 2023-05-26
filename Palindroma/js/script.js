// FUNZIONE PER CAPIRE SE LA PAROLA è PALINDROMA O NO
function checkPalindroma(parola){
    let palindroma = parola.split('').reverse().join('');

    if(palindroma === parola){
        console.log('La parola è PALINDROMA');
    }
    else{
        console.log('La parola NON è PALINDROMA');
    }
}


// VARIABILE CHE PERMETTE ALL' UTENTE DI INSERIRE UNA PAROLA

let parola_utente = prompt('Inserisci una parola').toLowerCase();

let check = checkPalindroma(parola_utente);

