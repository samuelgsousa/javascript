var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()


if(hora <= 1 || hora == 24){ 
    if(hora == 0 || hora == 24){
        console.log(`Agora é meia noite e ${minuto} minutos`) 
    } 
    else{
        console.log(`Agora é exatamente ${hora} hora e ${minuto} minutos`)}
 }   
    else{
        console.log(`Agora são exatamente ${hora}:${minuto} horas`)
}


if(hora < 12 && hora > 5){
    console.log('Boooom diaaaan!!!')
} else if(hora >= 12 && hora < 18){
    console.log('Boa tardchy')
} else if(hora >= 18 && hora < 24){
    console.log('Boa noitchy')
} else {
    console.log('Boa madrugadan')
} 

/*

VERSÃO COM O SWITCH

switch(hora){
    case 0:
        console.log(`Agora é meia noite e ${minuto} minutos`)
        break
    case 24: 
        console.log(`Agora é meia noite e ${minuto} minutos`)
        break
    case 1: 
    console.log(`Agora é exatamente ${hora} hora e ${minuto} minutos`)
        break
    default:
        console.log(`Agora são exatamente ${hora}:${minuto} horas`)
        break
}
*/
