import { DecoratorCalculadora } from './decorator-calculadora'

export class ICMCalculadora extends DecoratorCalculadora {
    realizaCalculo(valor: number): number {
        valor = valor + 18
        console.log(`calculando ICMS...`)
        return super.realizaCalculo(valor)
    }
}
