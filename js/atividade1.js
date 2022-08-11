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
function enviar(qntquest) {
    Number(qntquest)
    var pagina = document.querySelector('#page')
    if (pontos == qntquest) {
        pagina.innerHTML = '<h1>Parabéns você acertou todas as questões</h1>'
        console.log('all')
    }else if(pontos > qntquest/2){
        pagina.innerHTML = '<h1>Parabéns você acertou mais de 50% das questões</h1>'
        console.log('50%')
    }else if(pontos == 0){
        pagina.innerHTML = '<h1>Você não acertou nenhuma questão recarregue a página e tente novamente</h1>'
        console.log('0')
    }else{
        pagina.innerHTML = '<h1>Você acertou menos de 50% tente novamente recarregue a página e tente novamente</h1>'
        console.log('-50%')
    }
}