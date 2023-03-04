import { criaOrcamento } from './orcamento'
import { fazerCalculadoraICMS, fazerCalculadoraCofins, fazerCalculadoraPIS, fazerCalculadoraIPI } from './calculadora'
import { fazerDescontoQuantidade, fazerDescontoValor } from './desconto'

const calculadoraICMS = fazerCalculadoraICMS(0.10)
const calculadoraCofins = fazerCalculadoraCofins()
const calculadoraPIS = fazerCalculadoraPIS()
const calculadoraIPI = fazerCalculadoraIPI()
const calculaDescontoQuantidade = fazerDescontoQuantidade(0.1)
const calculaDescontoValor = fazerDescontoValor(0.2)

const orcamento = criaOrcamento([{ nome: "Notebook", valor: 1000, quantidade: 1000 }, { nome: "Desktop", valor: 2000, quantidade: 1000 }])

console.log(`Pré Descontos & ICMS & Cofins & PIS & IPI ${orcamento.valor}`)
const valorPosDescontos = orcamento.calculaDescontos([calculaDescontoQuantidade, calculaDescontoValor])
console.log(`Pós Descontos ${valorPosDescontos}`)
const valorPosImpostos = orcamento.calculaImpostos([calculadoraICMS, calculadoraCofins, calculadoraPIS, calculadoraIPI])
console.log(`Pós ICMS & Cofins & PIS & IPI ${valorPosImpostos}`)