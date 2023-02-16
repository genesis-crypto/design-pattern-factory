import { Calculadora } from './interface/calculadora-interface'

export class CofinsCalculadora implements Calculadora {    
    realizaCalculo(valor: number): number {
        if (valor > 1000) {
            return valor - 100
        }
        return valor
    }
}