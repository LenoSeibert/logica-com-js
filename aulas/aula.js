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
// w += ' oloquinho meu!!!!'
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
const nota = 4.9

if (nota <= 10 && nota >= 9) console.log('A')

if (nota < 9 && nota >= 7) console.log('B')

if (nota < 7 && nota >= 5) console.log('C')

if (nota < 5 && nota >= 4.5) console.log('D')

if (nota >= 0 && nota < 4.5) {
  console.log('F')
} else if (nota > 10 || nota < 0) {
  console.log('Nota não existe!')
}
