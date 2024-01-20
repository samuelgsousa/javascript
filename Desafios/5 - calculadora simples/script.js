let expressao = document.querySelector('input#res')


function calcular(){
    expressao.value = expressao.value.replace(/x/g, '*')
    try{
        if(eval(expressao.value) == Infinity){
           window.alert('Erro!!! Não é possível dividir por Zero')
        } else{expressao.value = eval(expressao.value)}
        
    } catch (error){
        expressao.value = null
        window.alert('ERRO!!!')
    }
}
function validarExpressao(input){
    input.value = input.value.replace(/[^0-9x+*\/.\-]/g, '')

    // a flag "g" garante que todos os caracteres indesejados na string sejam removidos, não apenas o primeiro encontrado.
}

function adicionarExpressao(adc){
    expressao.value += adc
}
function del(){
    expressao.value = expressao.value.slice(0, -1); //0 é quantos caracteres vc tira no começo e -1 quantos tira do final
}

function resetar(){
    expressao.value = null
}


