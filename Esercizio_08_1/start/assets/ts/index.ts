let player1: number;
let player2: number;
let risultato: string;
document.querySelector("#play")?.addEventListener("click", result);

function result() {
    let random: number = Math.floor(Math.random() * 100) + 1;
    let paragrafo: any = document.querySelector("#result");
    /* NON CORRETTO:
    player1 = +document.querySelector<HTMLInputElement>("#player1").value;
    player2 = +document.querySelector<HTMLInputElement>("#player2").value; */
    // MEGLIO FARE:
    let input1 = <HTMLInputElement>document.querySelector("#player1");
    let input2 = <HTMLInputElement>document.querySelector("#player2");
    player1 = +input1.value;
    player2 = Number(input2.value);
    // Stampa del Random Number
    let randomText: Element | null = document.querySelector("#random");
    if (randomText !== null) {
        randomText.textContent = `Numero random: ` + random;
    }
    // Stampa dei risultati e controllo
    if (player1 <= 100 && player2 <= 100 && player1 >= 1 && player2 >= 1) {
        // Numero indovinato
        if (player1 === random && player2 === random) {
            risultato = `Entrambi i giocatori hanno indovinato il numero`;
        } else if (player1 === random) {
            risultato = `Il giocatore 1 ha indovinato il numero`;
        } else if (player2 === random) {
            risultato = `Il giocatore 2 ha indovinato il numero`;
        }
        // Numero più vicino
        else {
            if (Math.abs(random - player1) === Math.abs(random - player2)) {
                risultato = `Nessuno dei due ha indovinato il numero casuale, pareggio`;
            } else if (
                Math.abs(random - player1) < Math.abs(random - player2)
            ) {
                risultato =
                    "Nessuno dei due ha indovinato il numero casuale, ma il giocatore 1 si è avvicinato di più!";
            } else {
                risultato =
                    "Nessuno dei due ha indovinato il numero casuale, ma il giocatore 2 si è avvicinato di più!";
            }
        }
        return (paragrafo.textContent = risultato);
    } else {
        return (paragrafo.textContent = `Sono ammessi solo numeri tra 1 e 100`);
    }
}
