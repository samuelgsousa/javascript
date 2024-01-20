function verificar(){
    var agora = new Date
    var ano_atual = agora.getFullYear()
    var ano = document.querySelector('input#data_nascimento')
    var ano_nascimento = parseInt(ano.value)
    var sexo = document.querySelector("input[name='sexo']:checked") // Aqui estamos selecionado um input radio que tem o nome de sexo, ou seja, o atributo name está configurado com este valor.
    var texto_resultado = document.querySelector('p#resultado')

    if(!isNaN(ano_nascimento) && sexo){
        var idade = ano_atual - ano_nascimento
        var img = document.querySelector('img#imagem')
        var tamanho_div = document.getElementById("conteudo")
        tamanho_div.style.height = "400px"

        texto_resultado.innerHTML = `Detectamos ${sexo.value} com ${idade} anos`

        if(sexo.value == "Homem"){
        if(idade < 14){
            img.src = 'crianca_menino.jpg'
        } else if (idade < 21){
            img.src = 'jovem_homem.jpg'
        } else if (idade < 60){
            img.src = 'adulto_homem.jpg'
        } else if (idade >= 60) {
            img.src = 'idoso_homem.jpg'
        }

    } else if(sexo.value == "Mulher"){
        if(idade < 14){
            img.src = 'crianca_menina.jpg'
        } else if (idade < 21){
            img.src = 'jovem_mulher.jpg'
        } else if (idade < 60){
            img.src = 'adulta_mulher.jpg'
        } else if (idade >= 60) {
            img.src = 'idosa_mulher.jpg'
        }
    }


        img.style.visibility = "visible"
        
    } else{
        texto_resultado.innerText = "Preencha todos os campos!!!"
    }
    
    
}