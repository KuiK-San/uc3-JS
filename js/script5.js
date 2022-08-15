function calcular() {
    var nota1 = Number(document.formulario.nota1.value)
    var nota2 = Number(document.formulario.nota2.value)
    var nota3 = Number(document.formulario.nota3.value)
    var nota4 = Number(document.formulario.nota4.value)
    var nome = document.formulario.nome.value
    var media = (nota1 + nota2 + nota3 + nota4) / 4
    var resultado = document.querySelector('.resultado')
    if (media >= 7.0) {
        resultado.innerHTML = `<p>Parabéns ${nome} sua média foi de ${media}</p><p>quer fazer um novo calculo?</p><input type="button" value="Refazer" onclick="refazer()">`    
    }else{
        resultado.innerHTML = 'Nota Baixa<br><p>quer fazer um novo calculo?</p><input type="button" value="Refazer" onclick="refazer()">'
    }
}
function refazer() {
    document.location.reload(true)
}