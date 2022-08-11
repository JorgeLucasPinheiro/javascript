var num = document.getElementById('txtn')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
let valores = []

function eNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if( eNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor Invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        alert('Adicione Valores')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p> O menor valor foi ${menor}.</p>`
        res.innerHTML += `<p> O maior valor foi ${maior}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p> a media dos valores é ${media} </p>`
    }
}



