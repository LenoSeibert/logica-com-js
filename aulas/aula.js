/**
 * Funcoes
 *
 */
//Sem função
// const d1 = 3
// const m1 = 7
// const a1 = 2021

// console.log(`Dia: ${d1}`)
// console.log(`Mês: ${m1}`)
// console.log(`Ano: ${a1}`)

// const d2 = 23
// const m2 = 12
// const a2 = 2022

// console.log(`Dia: ${d2}`)
// console.log(`Mês: ${m2}`)
// console.log(`Ano: ${a2}`)

//Com função
// const d1 = 3
// const m1 = 7
// const a1 = 2021

// function exibirData1() {
//   console.log(`${d1}/${m1}/${a1}`)
// }

// const d2 = 23
// const m2 = 12
// const a2 = 2022

// function exibirData2() {
//   console.log(`${d2}/${m2}/${a2}`)
// }

// exibirData1()
// exibirData2()
// exibirData1()

// exibirData2()
// exibirData1()
// exibirData2()
// const d1 = 3
// const m1 = 7
// const a1 = 2021

// const d2 = 23
// const m2 = 12
// const a2 = 2022

// function exibirData(d, m, a) {
//   console.log(`${d}/${m}/${a}`)
// }

// exibirData(d1, m1, a1)
// exibirData(d1, m1, a1)
// exibirData(d1, m1, a1)

// exibirData(d2, m2, a2)
// exibirData(d2, m2, a2)
// exibirData(d2, m2, a2)

// function soma(n1, n2, n3) {
//   console.log(n1 + n2 / n3)
// }
// soma(10, 10, 10)
// soma(10, 10, 1)
// let a
// let b = 7
// let c = null // nil
// let d = 0

// console.log(a, b, c)
// console.log(a + b)
// console.log(b + c + 1)
// console.log(b + d + 1)
// Parâmetro (Nota) -> Retorno (Conceito)

// function notaParaConceito(nota) {
//   switch (Math.ceil(nota)) {
//     case 10:
//       return 'A+'
//     case 9:
//       return 'A'
//     case 8:
//       return 'B+'
//     case 7:
//       return 'B'
//     case 6:
//       return 'C+'
//     case 5:
//       return 'C'
//     case 4:
//       return 'D+'
//     case 3:
//       return 'D'
//     case 2:
//       return 'E+'
//     case 1:
//       return 'E'
//     case 0:
//       return 'F'
//     default:
//       return null
//   }
// }

// console.log(`O conceito do Bruno é ${notaParaConceito(6.001)}`)
// console.log(`O conceito da Laura é ${notaParaConceito(8.9)}`)

// function sempreRetornaUm() {
//   return 1
// }

// function textoOuNumero(retornaTexto) {
//   // return retornaTexto ? "Sou um texto!" : 123;
//   if (retornaTexto) {
//     return 'Sou um texto!'
//   }

//   return 123
// }

// let valor = sempreRetornaUm() + 999
// console.log(valor)

// let texto = textoOuNumero(true)
// console.log(texto)

// console.log(textoOuNumero(false))
// const nota1 = 5.8
// const nota2 = 10
// const nota3 = 2.1

// function minimo(n1, n2) {
//   return n1 <= n2 ? n1 : n2
// }

// function mediaDuasMaiores(n1, n2, n3) {
//   const menorNota = minimo(n1, minimo(n2, n3))

//   if (menorNota === n1) {
//     return (n2 + n3) / 2
//   } else if (menorNota === n2) {
//     return (n1 + n3) / 2
//   } else {
//     return (n1 + n2) / 2
//   }
// }

// function mediaParaStatus(media) {
//   if (media >= 7) {
//     return 'Aprovado'
//   } else if (media >= 4) {
//     return 'Recuperação'
//   } else {
//     return 'Reprovado'
//   }
// }

// const mediaFinal = mediaDuasMaiores(nota1, nota2, nota3)
// const statusFinal = mediaParaStatus(mediaFinal)
// console.log(`O resultado final do aluno é ${statusFinal}!`)
function retornaUmaFuncao() {
  function bomDia() {
    return 'Bom dia!!!'
  }

  return bomDia
}

console.log(retornaUmaFuncao)
console.log(retornaUmaFuncao())
console.log(retornaUmaFuncao()())

const umaFuncao = retornaUmaFuncao()
console.log(umaFuncao())
