function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || fAno.value > ano){
        alert(' [ERRO]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML = 'idade calculada ' + idade
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','menino.png')
            } else if ( idade < 21){
                //jovem
                img.setAttribute('src', 'garoto.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'garota.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = genero + ' com '+idade+' anos.'
        res.appendChild(img)
    }
}