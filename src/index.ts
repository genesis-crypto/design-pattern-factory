import { criaOrcamento } from './orcamento'
import { fazerCalculadoraICMS, fazerCalculadoraCofins, fazerCalculadoraPIS, fazerCalculadoraIPI } from './calculadora'

const calculadoraICMS = fazerCalculadoraICMS(0.10)
const calculadoraCofins = fazerCalculadoraCofins()
const calculadoraPIS = fazerCalculadoraPIS()
const calculadoraIPI = fazerCalculadoraIPI()

const orcamento = criaOrcamento([{nome: "Notebook", valor: 1000}, {nome: "Desktop",valor: 2000}])
console.log(`Pré ICMS & Cofins & PIS & IPI ${orcamento.valor}`)

const valorPosImpostos = orcamento.calculaImpostos([calculadoraICMS, calculadoraCofins, calculadoraPIS, calculadoraIPI])
console.log(`Pós ICMS & Cofins & PIS & IPI ${valorPosImpostos}`)