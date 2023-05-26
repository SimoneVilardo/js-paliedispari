// PROMT PER FAR INSERIRE ALL'UTENTE PARI O DISPARI
let pari_dispari = prompt('PARI o DISPARI').toLowerCase();

// VERIFICO SE L'UTENTE HA INSERITO PARI O DISPARI
while(!(pari_dispari == 'pari' || pari_dispari == 'dispari')){

    pari_dispari = prompt('Scelta sbagliata: INSERICI PARI o DISPARI');
    
};

console.log(pari_dispari)

// PROMT PER FAR INSERIRE UN NUMERO COMPRESO TRA 1 E 5
let ins_numero = parseInt(prompt('Inserisci un numero da 1 a 5'));

// VERIFICO SE L'UTENTE ABBIA INSERITO UN NUMERO COMPRESO TRA 1 E 5
while(isNaN(ins_numero) || (ins_numero < 1 || ins_numero > 5)){
    ins_numero = parseInt(prompt('ERRORE: inserisci un numero compreso tra 1 e 5'));
};

console.log('NUMERO GIOCATORE= '+ins_numero);


// FUNZIONE PER NUMERO RANDOM DEL COMPUTER
function numeroComputer (min, max){
    return Math.floor(Math.random() * (max - min +1) +1);
};

// RICHIAMO LA FUNZIONE E INSERISCO I PARAMETRI
let num_generato = numeroComputer(1, 5);
console.log('NUMERO COMPUTER = '+num_generato);

// FACCIO LA SOMMA TRA I DUE NUMERI
let somma = (ins_numero + num_generato);
console.log(somma)

// FUNZIONE PER CAPIRE SE LA SOMMA è PARI O DISPARI
function pariOdispari (addizzione){
    if(addizzione % 2 === 0){
        return "pari";
    }
    else{
        return "dispari";
    }
}

// VERIFICO CON UN IF CHI HA VINTO
if (pari_dispari === pariOdispari(somma)){
    console.log('GRANDE, HAI VINTO!');
}
else {
    console.log('MI DISPIACE, HAI PERSO.')
}




