/**OPERADORES
 * Binários
 * Unários
 * Ternarios
 */
/**Desafio  aritmeticos
 * F − 32 / 9 * 5
 */
// let f = 100
// const c = ((f - 32) / 9) * 5
// console.log(c + 'C°')

/**Desafio operadores relacionais */
// let a = 1
// let b = 2

// console.log(a < b)
// console.log(a <= b)
// console.log(a != b)
// console.log(a !== b)
// console.log(a + a === b)

// console.log(a > b)
// console.log(a >= b)
// console.log(a == b)
// console.log(a === b)
// console.log(a + a !== b)

/**atribuição */
// let x = 10
// x = x + 6
// x = x - 1
// console.log(x)

// let y = 20
// y += 10
// console.log(y)

// let w = 'texto'
// w += ', mais um pouco de texto,'
// w += '  meu!!!!'
// console.log(w)

/**
 * Desafio atribuição
 */
// let texto = 'LISTA DE APROVADOS\n'
// texto += '==================\n\n'
// texto += '1. Ana Silva\n'
// texto += '2. Pedro Albuquerque\n'
// texto += '4. Guilherme Pereira\n'
// texto += '5. Rebeca França'
// console.log(texto)

/**
 * OPERADORES LÓGICOS
 */
// let t1 = true
// let t2 = false

// if (t1 && t2) {
//   console.log('Comprar tv 50"')
// } else if (t1 !== t2) {
//   console.log('Comprar tv 32"')
// } else {
//   console.log('Ficar em casa')
// }

/**Operador ternário */
// const hora = 11
// const saudacao = hora <= 11 ? 'Bom dia' : 'Boa Tarde'
// console.log(saudacao)

/**Operador ternário */
// const hora = 11
// const saudacao = hora <= 11 ? 'Bom dia' : hora <= 17 ? 'Boa Tarde' : 'Boa noite'
// console.log(saudacao)

/**Estruturas de controle */

// if (true) console.log('Executa')

// if (false) console.log(' N Executa')

// console.log('fim!')

// const nota = 9
// const bomComportamento = true

// if (nota >= 7 && bomComportamento) console.log('Parabéns!')

// if (nota < 7 || !bomComportamento) console.log('Uma pena!')

// console.log('Fim!')

// const nota = 9

// if (nota >= 9) {
//   console.log('Quadro de Honra!')
//   console.log('Parabéns!')
// } else if (nota >= 5) {
//   console.log('Voce precisa melhorar!')
// } else {
//   console.log('Você está em apuros')
// }

// console.log('Fim!')

/**Desafio IF */
// const nota = 4.9

// if (nota <= 10 && nota >= 9) console.log('A')

// if (nota < 9 && nota >= 7) console.log('B')

// if (nota < 7 && nota >= 5) console.log('C')

// if (nota < 5 && nota >= 4.5) console.log('D')

// if (nota >= 0 && nota < 4.5) {
//   console.log('F')
// } else if (nota > 10 || nota < 0) {
//   console.log('Nota não existe!')
// }

// const hora = 10

// let saudacao

// if (hora < 12) {
//   saudacao = 'Bom dia!'
// } else {
//   if (hora < 17) {
//     saudacao = 'Boa Tarde!'
//   } else {
//     if (hora >= 18 && hora < 24) {
//       saudacao = 'Boa noite'
//     } else {
//       if (hora >= 24 || hora < 0) {
//         saudacao = 'Horario de Narnia!!'
//       }
//     }
//   }
// }

// console.log(saudacao)
/**Desafio IF ELSE */

// const a = 10
// const b = 28
// const operacao = '-' // + - * / %

// if (operacao === '+') {
//   result = a + b
// } else if (operacao === '-') {
//   result = a - b
// } else if (operacao === '*') {
//   result = a * b
// } else if (operacao === '/') {
//   result = a / b
// } else if (operacao === '%') {
//   result = a % b
// } else {
//   result = 'Não é um operador valido'
// }
// console.log(result)
// while (false) {
//   console.log('Laço infinito')
// }

// let quantidade = 0
// // indeterminada de repetições
// while (Math.random() < 0.97) {
//   quantidade++
//   console.log(quantidade)
// }

// console.log('Qtde: ' + quantidade)

// const futuro = Date.now() + 2000
// let quantidade = 0

// while (Date.now() < futuro) {
//   quantidade++
// }

// console.log('Qtde: ' + quantidade)

/** Tempo em ms de do dia
 * 1 janeiro de 1970
 * */
//console.log(Date.now())
/** Essa é uma data base para o calculo
 * data usada no UNIX
 */
// const teste = 1
// while (teste < 10) {
//   console.log(teste)
// }
// let controle = 1

// while (controle <= 10 * 10) {
//   console.log(controle)
//   controle++
// }

// console.log('Fim!')

// for (let controle = 1; controle <= 10; controle++) {
//   console.log(controle)
// }

// console.log('Fim!')
// let controle = 1

// for (; controle <= 100; ) {
//   console.log(controle)
//   controle++
// }

// console.log('Fim!')
// 7, 6, 5, 4, 3

for (let num = 7; num >= 3; num--) {
  console.log(num)
}
console.log('Fim')

for (let i = 7; i >= 3; i--) {
  console.log(i)
}

console.log('Fim!')
