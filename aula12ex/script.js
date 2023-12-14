function carregar(){
var agora = new Date
var hora = agora.getHours()
var horario = document.querySelector('div#horario')
var corfundo = getComputedStyle(document.documentElement).getPropertyValue('--cor1')

horario.innerHTML = `Agora são ${hora} horas`
var img = document.querySelector('img#dia')

if(hora > 5 && hora < 12){
    img.setAttribute('src','manha.jpg')
    document.body.style.setProperty('--cor1','rgb(236, 192, 151)')
    } else if(hora >= 12 && hora < 18) {
            img.src = 'tarde.jpg' //É possível usar tanto o img.src quanto o setAttribute que está abaixo
            document.body.style.setProperty('--cor1','#C73828')
        }else if (hora >= 18 || hora <= 5){
            img.setAttribute('src','noite.jpg')
            document.body.style.setProperty('--cor1','#282C61')
        }
    }

    