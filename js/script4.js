function resposta() {
    var val1 = Number(document.formcalc.v1.value)
    var val2 = Number(document.formcalc.v2.value)
    var conta = document.formcalc.conta.value
    var result = document.querySelector('.result')

    if (conta == 'mais') {
        var resposta = val1 + val2
    }else if(conta == 'menos'){
        var resposta = val1 - val2
    }else if (conta == 'multiplicacao') {
        var resposta = val1 * val2
    }else if (conta == 'divisao'){
        if(val2 == 0){
            alert('digite um divisor valido (maior que 0)')
            
        }else{
            var resposta = val1 / val2
        }
        
    }else{
        var resposta = 'escolha uma operação'
    }
    if(val2 != 0){
        if(conta == ''){
            alert(resposta)
        }else{
            result.innerHTML = `<p>A resposta é ${resposta}</p>`
        }
    }

}