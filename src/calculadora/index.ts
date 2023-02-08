import { ICMCalculadora } from './caludora-icms'
import { CofinsCalculadora } from './calculadora-cofins'

export function fazerCalculadoraICMS(percentual: number) {
    return new ICMCalculadora(percentual)
}

export function fazerCalculadorCofins(percentual: number) {
    return new CofinsCalculadora(percentual)
}