var form = document.querySelector('.formulario')
var pontos = 0

function incorreta() {
    //#region variaveis
    var estado = document.querySelector('.status')
    var input1 = document.querySelector('.input1')
    var input2 = document.querySelector('.input2')
    var input3 = document.querySelector('.input3')
    var input4 = document.querySelector('.input4')
    var input5 = document.querySelector('.input5')
    const questao = document.querySelector('.questao')
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
function correta() {
    //#region variaveis
    var estado = document.querySelector('.status')
    var input1 = document.querySelector('.input1')
    var input2 = document.querySelector('.input2')
    var input3 = document.querySelector('.input3')
    var input4 = document.querySelector('.input4')
    var input5 = document.querySelector('.input5')
    const questao = document.querySelector('.questao')
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

    estado.innerHTML = '<p> Resposta Correta</p>'
    
    pontos++
    pontuacao.innerHTML = `<p>Você tem <strong> ${pontos}</strong> pontos </p>`


}