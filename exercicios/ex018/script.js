function revisar() {
    var resp = window.document.getElementById('resp')
    var initx = window.document.getElementById('initxt') 
    var fimtx = window.document.getElementById('fimtxt')
    var passtx = window.document.getElementById('passtxt')
    var inicio = Number(initx.value)
    var fim = Number(fimtx.value)
    var passo = Number(passtx.value)
    if (initx.value.length == 0 || fimtx.value.length == 0) {
        resp.innerHTML = 'Não foi possivel calcular'
        window.alert('ERRO! Digite valores válidos')
    } else {
        if (passtx.value.length == 0 || passo == 0) {
            window.alert('Valor do passo inválido, será considerao o passo 1')
            passo = 1
        }
        if (inicio < fim) {
            resp.innerHTML = 'contando: '
            for (var c = inicio;c <=fim; c += passo) {
                resp.innerHTML += (`${c}  `)
            } 
        } else {
            resp.innerHTML = 'contando: '
            for (var c = inicio; c >= fim; c-= passo) {
                resp.innerHTML += (`${c}  `)
            }
        }
        
    }
     
    
}