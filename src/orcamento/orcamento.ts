import { Calculadora } from '../calculadora/interface/calculadora-interface';
import { Orcamento as OrcamentoInterface, Produto } from './interface/orcamento-interface'

export class Orcamento implements OrcamentoInterface {
    public valor: number = 0
    public produtos: Produto[]

    constructor(produtos: Produto[]) {
        this.produtos = produtos
        this.produtos.map(({ valor, quantidade }) => this.valor += valor * quantidade)
    }

    calculaImpostos(calculadoras: Calculadora[]): number {
        const valorSemDesconto = this.valor

        calculadoras.forEach((each) => {
            const valorDescontado = each.realizaCalculo(this.valor)
            this.valor = valorDescontado
        })

        console.log(`Valor Imposto: ${valorSemDesconto - this.valor}`)

        return this.valor
    }
}