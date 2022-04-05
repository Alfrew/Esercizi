let esperienza = 6
let annoCorrente = 2022

eta = (annonascita) => annoCorrente - annonascita
let età = eta(2000)
let ingresso = (età < 18) ? ': L\'ingresso è vietato' : ': L\'ingresso è concesso'

alert(Ingr(2000))
document.write(età)
document.write(ingresso)

function Ingr(annoNascita) {
    function eta1() {
        let annocorrente = 2050
        return annoCorrente - annoNascita
    }
    let anni = eta1()
    let ingresso2 = (anni < 18) ? ': L\'ingresso è vietato' : ': L\'ingresso è concesso'
    return anni + ingresso2
}