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
        img.src = 'crianca_menino.jpg'
        
    } else{
        texto_resultado.innerText = "Preencha todos os campos!!!"
    }
    
    
}