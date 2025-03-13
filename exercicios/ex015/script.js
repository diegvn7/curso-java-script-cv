function verificar() {
    var anotxt = window.document.getElementById('anon')
    var ano = Number(anotxt.value)
    var data = new Date
    var anoa = data.getFullYear()
    res = window.document.getElementById('res')
    if (ano >= anoa || ano <= 0) {
        window.alert('ERRO digite uma data válida')
    } else {
        idade = anoa - ano
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //res.innerHTML = 'ssdaasdasd'
        if (sexo[0].checked) {
            //res.innerHTML = `è os guri`
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'imagens/crianca-m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                // veio
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        } else if (sexo[1].checked) {
            //res.innerHTML = `è os guria`
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                //criança
                img.setAttribute('src', 'imagens/crianca-f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                // veio
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detecteamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}