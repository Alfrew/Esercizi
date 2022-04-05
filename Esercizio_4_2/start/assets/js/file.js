{ var risposta = 'Il leone' }
var articolo = 'Il'
var animale = 'ghepardo'
const risposta2 = articolo + ' ' + animale
let popup = 'Pronti per il quiz?'
alert(popup)

var operazione1 = 4
var operatore2 = 2
var operazione3 = operazione1 > operatore2
var operazione4 = operazione1 < operatore2


function Leone() {
    document.getElementById('risposta1').innerHTML = risposta
}
{
    const risposta = 'La giraffa'
    function Giraffa() {
        document.getElementById('risposta2').innerHTML = risposta
    }
}
{
    let risposta = 'La zebra'
    function Zebra() {
        document.getElementById('risposta3').innerHTML = risposta
    }
}
function Leone2() {
    document.getElementById('risposta4').innerHTML = risposta
}
function Ghepardo() {
    document.getElementById('risposta5').innerHTML = risposta2
}

function Somma() {
    document.getElementById('risposta6').innerHTML = operazione1 += operatore2;
}
function Sottrazione() {
    document.getElementById('risposta7').innerHTML = operazione1 -= operatore2
}
function Vero() {
    document.getElementById('risposta8').innerHTML = operazione3
}
function Falso() {
    document.getElementById('risposta9').innerHTML = operazione4
}

console.log(operazione3 + ' ' + animale)