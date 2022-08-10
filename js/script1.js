

function incorreta(){

    alert(`Resposta incorreta tente novamente`)
    
}
function correta(x){
    var letracerta = x
    var correto = document.querySelector('.correta')
    correto.style.backgroundColor = "#7FFF00"
    alert(`Parabéns você acertou a Resposta certa é a letra ${letracerta}`)
    


} 