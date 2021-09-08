/*
 * Conceitos de Codigo
 * -> Sentença de codigo <-
 * -> Bloco de Codigo <-
 */

/*Abaixo são 3 sentenças de Codigo
Podendo elas ocupar mais que uma linha.
Uma comparação... seria o paragrafo que é
formado por varias palavras*/
// console.log('teste 1')
// console.log('teste 2')
// console.log('teste 3')

/**Comentarios */
// Linha
/**
 *
 * Bloco
 *
 * */

/**
 * Bloco de código no javascript
 *  {
 *      {
 *        sentença de codigo
 *      }
 *  }
 */
// {
//   console.log('bloco de código no javascript')
// }
// {
//   {
//     console.log('bloco de código no javascript')
//   }
//   {
//     console.log('bloco de código no javascript')
//   }
// }

/**
 * Exercicios exibir no console os
 * numeros pares e numeros impares até 10
 * Impares em 1 bloco e Pares em outro bloco
 */
// {
//   console.log('Impares')
//   console.log(1, 3, 5, 7, 9)
// }
// {
//   console.log('PARES')
//   console.log(2, 4, 6, 8, 10)
// }

/**
 * Trabalhando com dados
 */
// var produto = 'Caneta'
// var quantidade = 10
// var preco = 6.4
// var imposto = 1.5
// var precoFinal = preco + imposto

// console.log(produto)
// console.log(quantidade)
// console.log(preco)
// console.log(imposto)
// console.log(precoFinal)

// produto = 'Caneta BIC'
// console.log(produto)

/**
 *
 * variavel identificador atribuição
 * var/let    nomeVar      "algo"
 *
 */

// let produto = 'caderno' // sting (texto) -> sequencia de letras
// let categoria = 'Papelaria'
// console.log(produto + ' ' + categoria)

/**
 * Tipos de dados
 * string => texto
 * number => numeros
 * boolean => verdadeiro/falso true/false
 */

// let idade = 35
// console.log(typeof idade)

/**
 * var/let pode receber outro valor
 * var pode ser redeclarada
 * let nao pode ser redeclarada por
 * a variavel const recebe um valor
 * constante e não pode ser alterado
 *
 */
// let a = 1
// console.log(a)
// a = a + 10
// console.log(a)

// const nomeVar = a + 15
// console.log(nomeVar)

/**Desafio
 * Area da circunferencia
 * PI = 3.141592
 * PI * raio * raio
 */
// const pi = 3.141592653589793
// const raio = 2.1
// let areaCirc = pi * raio * raio
// console.log('A área do circulo é ' + areaCirc + ' m²')

// areaCirc = Math.PI * raio * raio
// console.log(areaCirc)

/**Desafio Troca
 * trocar valores das variaveis
 */
//Minha solução
let a = 7
let b = 94
let troca1 = a
let troca2 = b
a = troca2
b = troca1

console.log(a)
console.log(b)

//Solução Prof
let a = 7
let b = 94

console.log(a)
console.log(b)
