import { Calculadora } from './interface/calculadora-interface'

export class PISCalculadora implements Calculadora {
    realizaCalculo(valor: number): number {
        return valor - 10
    }
}