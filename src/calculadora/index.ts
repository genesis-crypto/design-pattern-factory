import { ICMCalculadora } from './caludora-icms'
import { CofinsCalculadora } from './calculadora-cofins'
import { PISCalculadora } from './calculadora-pis'
import { IPICalculadora } from './calculadora-ipi'

export function fazerCalculadoraICMS(percentual: number) {
    return new ICMCalculadora(percentual)
}

export function fazerCalculadoraCofins() {
    return new CofinsCalculadora()
}

export function fazerCalculadoraPIS() {
    return new PISCalculadora()
}

export function fazerCalculadoraIPI() {
    return new IPICalculadora()
}