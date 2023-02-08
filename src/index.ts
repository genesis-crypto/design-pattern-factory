import { criaOrcamento } from './orcamento'
import { fazerCalculadoraICMS, fazerCalculadorCofins } from './calculadora'

const calculadoraICMS = fazerCalculadoraICMS(0.10)
const calculadoraCofins = fazerCalculadorCofins(0.2)
const orcamento = criaOrcamento(1000)
console.log(`Pré ICMS & Cofins ${orcamento.valor}`)

const valorPosImpostos = orcamento.calculaImpostos([calculadoraICMS, calculadoraCofins])
console.log(`Pós ICMS & Cofins ${valorPosImpostos}`)