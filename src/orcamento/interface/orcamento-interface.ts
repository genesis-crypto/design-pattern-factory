import { Calculadora } from '../../calculadora/interface/calculadora-interface'

export interface Orcamento {
    valor: number
    calculaImpostos(calculadora: Calculadora[]): number
}