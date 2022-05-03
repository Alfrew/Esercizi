"use strict";
var _a;
let player1;
let player2;
let risultato;
(_a = document.querySelector("#play")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", result);
function result() {
    let random = Math.floor(Math.random() * 100) + 1;
    let paragrafo = document.querySelector("#result");
    /* NON CORRETTO:
    player1 = +document.querySelector<HTMLInputElement>("#player1").value;
    player2 = +document.querySelector<HTMLInputElement>("#player2").value; */
    // MEGLIO FARE:
    let input1 = document.querySelector("#player1");
    let input2 = document.querySelector("#player2");
    player1 = +input1.value;
    player2 = Number(input2.value);
    // Stampa del Random Number
    let randomText = document.querySelector("#random");
    if (randomText !== null) {
        randomText.textContent = `Numero random: ` + random;
    }
    // Stampa dei risultati e controllo
    if (player1 <= 100 && player2 <= 100 && player1 >= 1 && player2 >= 1) {
        // Numero indovinato
        if (player1 === random && player2 === random) {
            risultato = `Entrambi i giocatori hanno indovinato il numero`;
        }
        else if (player1 === random) {
            risultato = `Il giocatore 1 ha indovinato il numero`;
        }
        else if (player2 === random) {
            risultato = `Il giocatore 2 ha indovinato il numero`;
        }
        // Numero più vicino
        else {
            if (Math.abs(random - player1) === Math.abs(random - player2)) {
                risultato = `Nessuno dei due ha indovinato il numero casuale, pareggio`;
            }
            else if (Math.abs(random - player1) < Math.abs(random - player2)) {
                risultato =
                    "Nessuno dei due ha indovinato il numero casuale, ma il giocatore 1 si è avvicinato di più!";
            }
            else {
                risultato =
                    "Nessuno dei due ha indovinato il numero casuale, ma il giocatore 2 si è avvicinato di più!";
            }
        }
        return (paragrafo.textContent = risultato);
    }
    else {
        return (paragrafo.textContent = `Sono ammessi solo numeri tra 1 e 100`);
    }
}
