import { Calculadora } from './interface/calculadora-interface'

export class ICMCalculadora implements Calculadora {
    public percentual: number
    
    constructor(percentual: number) {
        this.percentual = percentual
    }

    realizaCalculo(valor: number): number {
        return valor * (1 - this.percentual)
    }
}
