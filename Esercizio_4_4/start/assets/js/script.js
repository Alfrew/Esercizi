let testo = 'Questa è una lista di Utenti'

let Utenti = [
    'Giovanni',
    'Paolo',
    'Franco',
    'Giannunzio',
]
document.getElementById("listaUtenti").innerHTML = Utenti

function aggiunta1() {
    let nuovo = document.getElementById("utente").value
    Utenti.unshift(nuovo)
    document.getElementById("listaUtenti").innerHTML = Utenti
    document.getElementById("utente").value = null
}
function aggiunta2() {
    let nuovo = document.getElementById("utente").value
    Utenti.push(nuovo)
    document.getElementById("listaUtenti").innerHTML = Utenti
    document.getElementById("utente").value = null
}
function rimozione1() {
    Utenti.shift()
    document.getElementById("listaUtenti").innerHTML = Utenti
}
function rimozione2() {
    Utenti.pop()
    document.getElementById("listaUtenti").innerHTML = Utenti
}
function ripristino() {
    Utenti = [
        'Giovanni',
        'Paolo',
        'Franco',
        'Giannunzio',
    ]
    document.getElementById("listaUtenti").innerHTML = Utenti
}


function Dati() {
    let terzo = Utenti.slice(2, 3)
    document.getElementById("utente3").innerHTML = terzo
    let totale = Utenti.length
    document.getElementById("tot").innerHTML = totale
    document.getElementById("btndati").innerHTML = 'Aggiorna dati'
}






