document.addEventListener('DOMContentLoaded', function() {
    // Adicionando eventos de input nos campos relevantes
    document.getElementById('bill').addEventListener('input', calcular);
    document.getElementById('people').addEventListener('input', calcular);
    document.getElementById('tip_custom').addEventListener('input', calcular);

    // Adicionando evento de clique na label RESET
    document.querySelector('input[type="button"]').addEventListener('click', calcular);
})

function calcular(){
    var bill = document.querySelector('input#bill')
    var people = document.querySelector('input#people')
    var tip = document.querySelector("input[name='gorjeta']:checked")
    var gorjeta = 0
    var tip_c = document.querySelector('input#tip_custom')
    
    var reset = document.querySelector('input#resetar')
     
    resetar_button(reset, bill, people, tip_c, tip)

    if(bill != null && bill.value != 0 && people != null && people.value != 0){

            var total = Number(bill.value) / Number(people.value)
            
            if(tip !== null && tip.checked){
                gorjeta = tip.value * (total / 100)

            } else if(tip_c != null && tip_c.value != 0){
                gorjeta = tip_c.value * (total / 100)
    
            }
            var res_tip = document.querySelector('span#res_tip')
            res_tip.innerHTML = "$" + gorjeta.toFixed(2)

            var res_total = document.querySelector('span#res_total')
            res_total.innerHTML = "$" + total.toFixed(2)
        
        
    }
       
}

function marcar_custom(){ //está funcionando
    var tip_c = document.querySelector('input#tip_custom')
    tip_c.classList.add('c_destacada')
    
    var tip = document.querySelector("input[name='gorjeta']:checked")
    tip.checked = false
    
        desmarcar_labels()
        calcular()
        
}

function marcar_label(){
   var tip_c = document.querySelector('input#tip_custom')
    tip_c.classList.remove('c_destacada')
    var tip = document.querySelector("input[name='gorjeta']:checked")
    
    desmarcar_labels()

    document.querySelector('label[for="' + tip.id + '"]').classList.add('destacada')

    calcular()
}

function desmarcar_labels(){
    var todasLabels = document.querySelectorAll('label');
    todasLabels.forEach(function (label) {
        label.classList.remove('destacada')
    });
}

function reset(){
    var bill = document.querySelector('input#bill')
    var people = document.querySelector('input#people')
    var tip = document.querySelector("input[name='gorjeta']:checked")
    var tip_c = document.querySelector('input#tip_custom')
    var res_tip = document.querySelector('span#res_tip')
    var res_total = document.querySelector('span#res_total')
    
    res_tip.innerHTML = "$00.00"
    res_total.innerHTML = "$00.00"
    tip_c.value = null
    bill.value = null
    people.value = null
    tip.checked = false
    desmarcar_labels()

}

function resetar_button(reset, bill, people, tip_c, tip){
    if(bill.value == "" && people.value == "" && tip_c.value == "" && (!tip || !tip.checked)){
        reset.classList.remove('clicavel')

    } else{
        reset.classList.add('clicavel')

    }
}