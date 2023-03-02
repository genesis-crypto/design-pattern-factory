import { Calculadora } from '../../calculadora/interface/calculadora-interface'
import { Desconto } from '../../desconto/interface/desconto-interface'

export type Produto = {
    nome: string
    valor: number
    quantidade: number
}

export interface Orcamento {
    valor: number
    produtos: Produto[]

    calculaImpostos(calculadora: Calculadora[]): number
    calculaDescontos(descontos: Desconto[]): number
}