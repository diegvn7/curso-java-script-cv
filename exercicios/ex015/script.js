function verificar() {
    var anotxt = window.document.getElementById('anon')
    var ano = Number(anotxt.valor)
    var data = new Date
    var anoa = data.getFullYear()
    idade = anoa - ano
    msg.innerHTML = `Detectamos uma pessa com ${anotxt} anos.`
}