function contador(){

var initxt = document.getElementById('tinicio')
var txtfim = document.getElementById('tfim')
var tpasso = document.getElementById('tpasso')

var inicio = Number(initxt.value)
var fim = Number(txtfim.value)
var passo = Number(tpasso.value)

var res = window.document.getElementById('res')

if (passo <= 0){
    alert('Passo inválido! Será considerado 1')
    passo = 1
}

if (passo > fim || inicio > fim){
    alert('O início e o passo não podem ser maiores que o fim! Tente denovo.')
}

if (fim > 5000){
    alert('Grande demais...')
    return
}

res.innerHTML = ''
res.style.background = 'white'

while (inicio <= fim){
    res.innerHTML += ` ${inicio}➡`
    inicio = inicio + passo
    }
    res.innerHTML += `🏁`
}