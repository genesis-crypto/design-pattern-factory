import { Calculadora } from '../calculadora/interface/calculadora-interface';
import { Desconto } from '../desconto/interface/desconto-interface';
import { Orcamento as OrcamentoInterface, Produto } from './interface/orcamento-interface'

export class Orcamento implements OrcamentoInterface {
    public valor: number = 0
    public produtos: Produto[]

    constructor(produtos: Produto[]) {
        this.produtos = produtos
        this.produtos.map(({ valor, quantidade }) => this.valor += valor * quantidade)
    }

    calculaImpostos(calculadoras: Calculadora[]): number {
        calculadoras.forEach((each) => {
            const valorDescontado = each.realizaCalculo(this.valor)
            this.valor = valorDescontado
        })

        return this.valor
    }

    calculaDescontos(descontos: Desconto[]): number {
        const todosDescontos: number[] = []

        descontos.forEach((each) => {
            const valor = each.realizaCalculo(this)
            todosDescontos.push(valor)
        })

        return todosDescontos[0]
    }
}