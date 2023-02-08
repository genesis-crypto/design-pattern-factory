import { Calculadora } from './interface/calculadora-interface'

export class CofinsCalculadora implements Calculadora {
    public percentual: number
    
    constructor(percentual: number) {
        this.percentual = percentual
    }

    realizaCalculo(valor: number): number {
        return valor * (1 - this.percentual)
    }

}