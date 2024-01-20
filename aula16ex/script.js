let lista = []
let listav = document.querySelector('select#listav')
let conteudo = document.querySelector('div#conteudo')
let val = document.querySelector('input#valor')
let res = document.createElement("p") //usei o create element apenas para praticar a criação de elementos dinamicamente. Funcionaria também se eu criasse um parágrafo vazio e depois alterasse

function adicionar(){
    if(inLista(lista, val.value) == true){ //inLista = função criada mais abaixo
        window.alert('Não é possível adicionar um número existente!')
    } else if(val.value === ""){
        window.alert('Por favor adicione um número antes de continuar!!!')
    } else if(val.value < 1 || val.value > 100){
        window.alert('Erro, o número deve estar entre 1 e 100')
    } else {
    lista.push(Number(val.value)) //o array recebe um valor já convertido em número
    
    listav.options[listav.options.length] = new Option(`Valor ${val.value} adicionado`, val.value) // o valor é adicionado no select
    
    /* Opção alternativa para adicionar o valor na lista
    let item = document.createElement('option') //crio o elemento "option"
    item.value = val.value  //atribuo um valor a essa option
    item.text = `Valor ${val.value} adicionado.` //atribuo o texto dessa option
    listav.appendChild(item) // vinculo essa option a listav (que é meu select) como filha. Dessa forma a opção é adicionada a lista com um valor além do texto
    */

    val.value =  null //o input number é limpo
    val.focus() //o cursor volta ao input number
    res.innerHTML = null
}
}
function calcular(){

    if(lista.length == 0){
        window.alert('Insira algum valor antes de finalizar')
    } else{
    let soma = 0
    for(let i = 0; i < lista.length; i++){
        soma += lista[i] //não é necessário colocar .value ou number pois o array já recebe os valores convertidos em número lá em cima
    }
    res.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${Math.max(...lista)}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${Math.min(...lista)}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${(soma / lista.length).toFixed(2)}</p>`
    conteudo.appendChild(res);
}
}

function inLista(l, v){ //verifica se o valor existe no array
    if(l.indexOf(Number(v)) == -1){
        return false
    } else {
        return true
    }

   /* 
   os dois são a mesma coisa
   for(let i = 0; i < l.length; i++){
        if(v == l[i]){
            return true
        }  
    }*/
}