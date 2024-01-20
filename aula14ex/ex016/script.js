function contar(){
    var inicio = Number(document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.querySelector('input#passo').value)
    var contagem = document.querySelector('p#contando')
    contagem.innerHTML = "Contando:"
    var resultado = document.querySelector('p#resultado')
    
    resultado.innerHTML = null
    
    if(passo == 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1
    }

    if(fim == 0){
        resultado.innerHTML = "[ERRO!] O valor final não pode zer igual a Zero"
    } else if(isNaN(inicio) || isNaN(fim) || fim == "" || isNaN(passo)){
        resultado.innerHTML = "[ERRO!] Todos os dados devem ser preenchidos"
    }  else if(inicio > fim){
        resultado.innerHTML = "[ERRO!] O valor de início não pode ser maior do que o valor de fim"

    } else{
        for(inicio; inicio <= fim; inicio += passo){
            resultado.innerHTML += inicio + "&#128073 "
        } resultado.innerHTML += "&#127988"
    }
    
    
}