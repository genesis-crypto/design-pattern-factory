import {Calculadora} from './interface/calculadora-interface'

export class DecoratorCalculadora implements Calculadora {
    protected calculadora: Calculadora

    constructor(calculadora: Calculadora) {
        this.calculadora = calculadora
    }

    realizaCalculo(valor: number): number {
        return this.calculadora.realizaCalculo(valor)
    }
}