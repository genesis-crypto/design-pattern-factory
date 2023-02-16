import { Calculadora } from '../calculadora/interface/calculadora-interface';
import { Orcamento as OrcamentoInterface, Produto } from './interface/orcamento-interface'

export class Orcamento implements OrcamentoInterface {
    public valor: number = 0
    public produtos: Produto[]

    constructor(produtos: Produto[]) {
        this.produtos = produtos
        this.produtos.map((produto) => this.valor += produto.valor)
    }
    
    calculaImpostos(calculadoras: Calculadora[]): number {
        calculadoras.forEach((each) => {
            const valorDescontado = each.realizaCalculo(this.valor)
            this.valor = valorDescontado
        })

        return this.valor
    }
    
}