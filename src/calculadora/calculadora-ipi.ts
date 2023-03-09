import { DecoratorCalculadora } from './decorator-calculadora'

export class IPICalculadora extends DecoratorCalculadora {
    realizaCalculo(valor: number): number {
        valor = valor + 0.4
        console.log(`calculando IPI...`)
        return super.realizaCalculo(valor)
    }
}