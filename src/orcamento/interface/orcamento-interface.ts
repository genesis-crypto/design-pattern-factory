import { Calculadora } from '../../calculadora/interface/calculadora-interface'

export type Produto = {
    nome: string
    valor: number
    quantidade: number
}

export interface Orcamento {
    valor: number
    produtos: Produto[]

    calculaImpostos(calculadora: Calculadora[]): number
}