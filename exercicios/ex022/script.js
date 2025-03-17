function add() {
    let njs = window.document.getElementById('ntxt')
    let n = Number(njs.value)
    let list = []
    if (list.indexOf(n) != -1 || n < 100) {
        list.push(n)
        let tab = window.document.getElementById('resulttxt')
        var item = window.document.createElement('option')
        item.text = `O valor ${n} foi adicionado.`
        tab.appendChild(item)
        
    } else {
        window.alert('Digite um valor acima de 100 ou não repitido')
    }
}
    
// function finalizar() {
//     var res = window.document.getElementById('res')
//     res.innerHTML= list
// }
    
    // let tab = window.document.getElementById('resulttxt')
    // var item = window.document.createElement('option')
    // item.text = `O valor ${n} foi adicionado.`
    // tab.appendChild(item)
    
    
