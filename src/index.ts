import { criaOrcamento } from './orcamento'
import { ICMCalculadora } from './calculadora/caludora-icms'
import { PISCalculadora } from './calculadora/calculadora-pis'
import { CofinsCalculadora } from './calculadora/calculadora-cofins'
import { IPICalculadora } from './calculadora/calculadora-ipi'
import { CalculadoraConcreta } from './calculadora/calculadora'

const calculadora = new CalculadoraConcreta()
const calculadoraICMS = new ICMCalculadora(calculadora)
const calculadoraPIS = new PISCalculadora(calculadoraICMS)
const calculadoraConfis = new CofinsCalculadora(calculadoraPIS)
const calculadoraIPI = new IPICalculadora(calculadoraConfis)

const orcamento = criaOrcamento([{ nome: "Notebook", valor: 1000, quantidade: 1000 }, { nome: "Desktop", valor: 2000, quantidade: 1000 }])

const valor = calculadoraIPI.realizaCalculo(orcamento.valor)
console.log('Valor Pós ICMS -> PIS -> Cofins -> IPI: ', valor)

