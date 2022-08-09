function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('foto')
  var fnd = document.querySelector('.fundo')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  var segundos = data.getSeconds()
  msg.innerHTML = 'Agora são '+ hora + ' horas e ' + minutos + ' minutos e ' + segundos + ' segundos'
  if (hora >= 0 && hora < 12) {
    //bom dia
    img.innerHTML = '<img src = "manha.png">'
    fnd.style.background = 'yellow'
    fnd.style.color = 'gray'
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.innerHTML = '<img src = "tarde.png">'
    fnd.style.background = 'rgb(206, 92, 4)'
  } else {
    //Boa Noite
    img.innerHTML = '<img src = "noite.png">'
    fnd.style.background = 'darkblue'
  }
}
