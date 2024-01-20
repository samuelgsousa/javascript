var img = document.createElement('img')
img.setAttribute('id', 'imagem')
 
 function verificar(){
    var agora = new Date
    var ano_atual = agora.getFullYear()
    var ano_nascimento = document.querySelector('input#data_nascimento')
    var sexo = document.querySelector("input[name='sexo']:checked") // Aqui estamos selecionado um input radio que tem o nome de sexo, ou seja, o atributo name está configurado com este valor.
    var texto_resultado = document.querySelector('p#resultado')
    

    if(ano_nascimento.value.length != 0 && sexo){ //não está funcionando corretamente
        if(ano_nascimento.value > ano_atual){
            window.alert('[ERRO] O ano de nascimento não pode ser maior que o ano atual!!!')
        } else{
        var idade = ano_atual - Number(ano_nascimento.value) //Mais efetivo
        var tamanho_div = document.getElementById("conteudo")
        tamanho_div.style.height = "400px"
        


        texto_resultado.innerHTML = `Detectamos ${sexo.value} com ${idade} anos`

        if(sexo.value == "Homem"){
        if(idade < 14){
            img.setAttribute('src', 'crianca_menino.jpg')
        } else if (idade < 21){
            img.setAttribute('src', 'jovem_homem.jpg')
        } else if (idade < 60){
            img.setAttribute('src', 'adulto_homem.jpg')
        } else if (idade >= 60) {
            img.setAttribute('src', 'idoso_homem.jpg')
        }

    } else if(sexo.value == "Mulher"){
        if(idade < 14){
            img.setAttribute('src', 'crianca_menina.jpg')
        } else if (idade < 21){
            img.setAttribute('src', 'jovem_mulher.jpg')
        } else if (idade < 60){
            img.setAttribute('src', 'adulta_mulher.jpg')
        } else if (idade >= 60) {
            img.setAttribute('src', 'idosa_mulher.jpg')
        }
    }

    var res = document.getElementById('conteudo'); // Obtenha o contêiner pelo id
    res.appendChild(img); // Anexe a imagem ao contêiner
    }
        
    } else{
        texto_resultado.innerText = "Preencha todos os campos!!!"
    }
    
    
}