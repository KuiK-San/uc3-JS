var qnt_nota = Number(prompt('informe a quantidade de Notas que será inseridas'))
var formulario = document.querySelector('.formulario')

for (let i = 1; i <= qnt_nota; i++) {
    formulario.innerHTML += `<p>
    <label for="">Nota ${i}</label><br>
    <input type="number" name="nota${i}" id="" class="nota${i}">
</p>`
}
function calcular() {
    var soma = 0
    for(let i = 1;i <= qnt_nota; i++){
        soma += Number(document.querySelector(`.nota${i}`).value)
    }
    var nome = document.formulario.nome.value
    var media = parseInt(soma / qnt_nota)
    var resultado = document.querySelector('.resultado')
    if (media >= 7.0) {
        resultado.innerHTML = `<p>Parabéns ${nome} sua média foi de ${media}</p><p>quer fazer um novo calculo?</p><input type="button" value="Refazer" onclick="refazer()">`    
    }else{
        resultado.innerHTML = '<p>Nota Baixa</p><p>quer fazer um novo calculo?</p><input type="button" value="Refazer" onclick="refazer()">'
    }
}
function refazer() {
    document.location.reload(true)
}