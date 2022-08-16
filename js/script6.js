function testa(){
    var p1 = document.forms['formsenha']['senha'].value
    var p2 = document.forms['formsenha']['senha_conf'].value
    if(document.forms['formsenha']['senha'].value.length < 6){
        alert('senha pequena. Digite pelo menos 6 caracteres.')
        return false
    }
    if (p1 != p2){
        alert('as senhas não coincidem')
        return false
    }

}