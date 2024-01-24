document.querySelector('input.tema').addEventListener('input', function(){
    document.querySelector('link#colors').href = `tema${document.querySelector('input.tema').value}.css` //aqui utilizo uma função anônima para localizar o meu link de estilos de cores, e em seguida alterar esse link para tema${}. Dentro das chaves, a sintaxe localiza qual o valor atual do meu seletor de tema (input range)
})

if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){ //inicia o tema de acordo com as preferências que o usuário definiu no navegador
    document.querySelector('input.tema').value = 1;
    document.querySelector('link#colors').href = `tema1.css`
} else{
    document.querySelector('input.tema').value = 2;
    document.querySelector('link#colors').href = `tema2.css`
}

let expressao = document.querySelector('input.res')

function calcular(){
    if(expressao.value == ""){
        window.alert('Digite algum valor para continuar')
    } else{
    expressao.value = expressao.value.replace(/x/g, '*') //aqui estou substituindo o "x" que aparece para o usuário pelo * que é o operador de multiplicação do javascript
    //1- o x entre as varras indica qual o conteúdo vai ser substituido e o * entre aspas é o conteúdo que o substituirá (x passa a ser *)
    //2- o g indica que o argumento é global, ou seja, deve substituir o x em todas as ocorrências, e não apenas na primeira
    try{
        if(eval(expressao.value) == Infinity){ 
            //a função eval serve para executar a expressão que está na string. Ex: 5+5+5 passa a ser 15
            //infinity é o valor que dá quando se tenta dividir por zero
           window.alert('Erro!!! Não é possível dividir por Zero')
        } else{expressao.value = eval(expressao.value)}
        
    } catch (error){ //try catch serve para casp não seja possível executar a função acima por algum erro além dos que foram escritos. Por exemplo, se o usuário digitar apenas um operador e tentar ver um resultado
        expressao.value = null
        window.alert('ERRO!!!')
    }
}
}
function validarExpressao(input){
    input.value = input.value.replace(/[^0-9x+*\/.\-]/g, '')

    // a flag "g" garante que todos os caracteres indesejados na string sejam removidos, não apenas o primeiro encontrado.
}

let adicionarExpressao = (adc) => expressao.value += adc
function adicionarExpressao(adc){
    expressao.value += adc
    //essa função adiciona o valor do botão que o usuário clicar na caixa de texto. adc é o parâmetro que ele recebe de cada um dos botões (que no caso, é o valor deles)
}
function del(){
    expressao.value = expressao.value.slice(0, -1); //0 é quantos caracteres vc tira no começo e -1 quantos tira do final
}

function resetar(){
    expressao.value = null
}


//esse código existe apenas para comparar como eu fiz as funções antes e depois do arrow funcion