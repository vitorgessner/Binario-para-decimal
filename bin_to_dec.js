// É possível rodar pelo bash usando o node.js digitando no bash:
// 1. node
// 2. .load bin_to_dec.js
// 3. chamando a função binarioDecimal(binario)

function binarioDecimal(decimal){
    let numero = decimal.toString()
    let expoente = 0
    let soma = 0
    for (let i = numero.length - 1; i >= 0; i--){
        soma += Number(numero[i]) * Math.pow(2, expoente)
        expoente++
    }
    return soma
}