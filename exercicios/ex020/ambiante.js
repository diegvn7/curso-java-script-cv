let num = [1,3,4,5]
num[4] = 3
num.push(7) //colocar em ultimo
num.push(4) //colocar em primeiro
num.sort() //colocar em ordem

console.log(num)
// console.log(`Nosso vteror tem ${num.length} posições`) 
// console.log(`o primeiro valor do vetor é ${num[0]}`)

// for (pos = 0; pos <= num.length; pos++) {
//     console.log(num[pos])
// }

// for (let pos in num) {
//      console.log(num[pos])
// }

let pos = num.indexOf(5)
console.log(`O valor 5 está na posição ${pos}`)
