function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 20
    msg.innerHTML = `Agora são ${hora} horas`


    if (hora >=0 && hora < 12){
        // manhã
        document.body.style.background = '#909913ad'
        img.src = "imagens/manhã.jpg"
    } else if (hora >= 12 && hora < 18) {
        // tarde
        document.body.style.background = '#200d00'
        img.src = "imagens/tarde.jpg"
    } else {
        //noite
        document.body.style.background = '#02021a'
        img.src= "imagens/noite.jpg"
    }

}