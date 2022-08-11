var form = document.querySelector('.formulario')
var pontos = 0

function incorreta(x) {
    //#region variaveis
    var questao = document.querySelector(`#quest${x}`)
    var estado = document.querySelector(`.status-${x}`)
    var input1 = document.querySelector(`.input1-${x}`)
    var input2 = document.querySelector(`.input2-${x}`)
    var input3 = document.querySelector(`.input3-${x}`)
    var input4 = document.querySelector(`.input4-${x}`)
    var input5 = document.querySelector(`.input5-${x}`)

    //#endregion

    //#region disabled input
    input1.disabled = true;
    input2.disabled = true;
    input3.disabled = true;
    input4.disabled = true;
    input5.disabled = true;
    //#endregion

    questao.style.backgroundColor = '#61000F'
    questao.style.Color = '#E00020'

    estado.innerHTML = '<p> Resposta Incorreta</p>'

}

function correta(x) {
    //#region variaveis
    var questao = document.querySelector(`#quest${x}`)
    var estado = document.querySelector(`.status-${x}`)
    var input1 = document.querySelector(`.input1-${x}`)
    var input2 = document.querySelector(`.input2-${x}`)
    var input3 = document.querySelector(`.input3-${x}`)
    var input4 = document.querySelector(`.input4-${x}`)
    var input5 = document.querySelector(`.input5-${x}`)
    var pontuacao = document.querySelector('.pontuacao')
    //#endregion

    //#region disabled input
    input1.disabled = true;
    input2.disabled = true;
    input3.disabled = true;
    input4.disabled = true;
    input5.disabled = true;
    //#endregion

    questao.style.backgroundColor = '#4B940F'

    estado.innerHTML = '<p>Resposta Correta</p>'
    
    pontos++
    if(pontos == 1){
        pontuacao.innerHTML = `<p>Você tem <strong> ${pontos}</strong> ponto</p>`
    }else{
        pontuacao.innerHTML = `<p>Você tem <strong> ${pontos}</strong> pontos</p>`
    }
}