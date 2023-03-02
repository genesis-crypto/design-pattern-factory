import { Orcamento } from '../orcamento/orcamento';
import { Desconto as DescontoInterface } from './interface/desconto-interface'

export class QuantidadeDesconto implements DescontoInterface {
    percentual: number;
    
    constructor(percentual: number) {
        this.percentual = percentual
    }

    realizaCalculo(orcamento: Orcamento): number {
        const qtde = orcamento.produtos.reduce((acc, current) => acc + current.quantidade, 0)

        if (qtde > 5) {
            return orcamento.valor * (1 - this.percentual)
        }
    
        return orcamento.valor
    }

}