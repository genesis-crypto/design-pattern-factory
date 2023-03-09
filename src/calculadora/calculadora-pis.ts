import { DecoratorCalculadora } from './decorator-calculadora'

export class PISCalculadora extends DecoratorCalculadora {
    realizaCalculo(valor: number): number {
        valor = valor * (1 + .1)
        console.log(`calculando PIS...`)
        return super.realizaCalculo(valor)
    }
}