function acesso(){
    var idade = document.formidade.idade.value
    if (idade >= 18) {
        window.open('https://www.pr.senac.br/principal/index.asp')
    }else{
        alert(`você tem apenas ${idade} anos e não está permitido em nosso site`)
    }
}