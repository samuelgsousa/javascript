function tabuada(){
    var numero = Number(document.querySelector('input#valor').value)
    var lista = document.querySelector('select#tabuada')
    var multiplicador = 1

    if(isNaN(numero) || numero == ""){ //ficaria melhor utilizando numero.value.length, mas ai precisaria converter depois
        window.alert('Por favor digite um número')
    } else{
    lista.innerHTML = null

    for(multiplicador; multiplicador <= 10; multiplicador++){

        lista.options[lista.options.length] = new Option(`${numero} X ${multiplicador} = ${numero * multiplicador}`, numero * multiplicador)
       
    }
}
}