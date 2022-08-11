function verificar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var resultado = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO]')
        resultado.innerHTML = 'Impossivel Contar'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('passo invalido Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                resultado.innerHTML += ' ' + c + ' \u{1F449}'
            }
        } else {
            //contagem regressiva
            for (var c = i; c >= f; c -= p) {
                resultado.innerHTML += ' ' + c + ' \u{1F449}'
            }
        }
        resultado.innerHTML += '\u{1F3C1}'
    } 
}