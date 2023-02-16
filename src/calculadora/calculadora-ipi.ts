import { Calculadora } from "./interface/calculadora-interface";

export class IPICalculadora implements Calculadora {
    realizaCalculo(valor: number): number {
        return valor * 0.99
    }
}