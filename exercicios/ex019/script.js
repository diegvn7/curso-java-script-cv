function gerar() {
    var valjs = window.document.getElementById('tabtxt')
    var tab = window.document.getElementById('seletab')
   
    if (valjs.value.length == 0) {
        window.alert('Digite um valor')
    } else {
        var val = Number(valjs.value)
        c = 1
        tab.innerHTML = ''
        while (c <=10) {
            var item = document.createElement('option')
            item.text = `${val} x ${c} = ${val*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}