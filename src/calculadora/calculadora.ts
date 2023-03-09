import { Calculadora } from "./interface/calculadora-interface";

export class CalculadoraConcreta implements Calculadora {
    realizaCalculo(valor: number): number {
        return valor
    }

}