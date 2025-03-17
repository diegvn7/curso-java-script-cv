let res = window.document.getElementById('res')
let tab = window.document.getElementById('resulttxt')
let n = window.document.getElementById('ntxt')
let list = []

function isNum(num) {
    if (num >= 1 && num <= 100){
        return true
    } else {
        return false
    }
}

function isList(num, l) {
    if (l.indexOf(num) != -1) {
        return true
    } else {
        return false
    }
}


function add() { 
    if (isNum(n.value) && !isList(n.value, list)) {
        list.push(n.value)
        var item = window.document.createElement('option')
        item.text = `O valor ${n.value} foi adicionado.`
        tab.appendChild(item)

        // res.innerHTML = ''
    } else {
        window.alert('Digite um valor acima de 0 a 100 ou não repitido')
    }

    n.value = ''
    n.focus()
}

function finalizar() {
    if (list.length == 0) {
        window.alert('Adicione um valor')
    } else {
        let maior = Math.max.apply(null, list)
        let menor = Math.min.apply(null, list)
        let soma = 0
        for (let c = 0; c <= list.length; c++) {
            soma += list[c]
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo são ${list.length} numeros cadastrados</p>` 
        res.innerHTML += `<p>O Maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos valores foi ${soma}</p>`
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
    
    
