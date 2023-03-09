import { DecoratorCalculadora } from './decorator-calculadora'

export class CofinsCalculadora extends DecoratorCalculadora {    
    realizaCalculo(valor: number): number {
        if (valor > 1000) {
            valor = valor + 100
        }
        console.log(`calculando Cofins...`)
        return super.realizaCalculo(valor)
    }
}