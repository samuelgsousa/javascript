var num = [5, 8, 4]
num[3] = 6
num.push(7) // adiciona um número
num.sort() // ordenar em ordem crescente
num.length // verificar a largura

console.log(`Nosso vetor é o ${num}`)
console.log(`ele tem ${num.length} posições`)

for(let pos=0; pos<num.length; pos++){
    console.log(`Posição ${pos}: ${num[pos]}`)
}

if (num.indexOf(8) == -1){
    console.log('O valor não foi encontrado!')
} else console.log(`O valor de 8 está na posição ${num.indexOf(8)}`)