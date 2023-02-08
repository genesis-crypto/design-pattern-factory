import { Calculadora } from '../calculadora/interface/calculadora-interface';
import {Orcamento as OrcamentoInterface} from './interface/orcamento-interface'

export class Orcamento implements OrcamentoInterface {
    public valor: number;
    
    constructor(valor: number) {
        this.valor = valor;
    }
    
    calculaImpostos(calculadoras: Calculadora[]): number {
        calculadoras.forEach((each) => {
            const valorDescontado = each.realizaCalculo(this.valor)
            this.valor = valorDescontado
        })

        return this.valor
    }
    
}