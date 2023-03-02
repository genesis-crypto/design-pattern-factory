import { Orcamento } from '../orcamento/orcamento';
import { Desconto as DescontoInterface } from './interface/desconto-interface'

export class ValorDesconto implements DescontoInterface {
    percentual: number;
    
    constructor(percentual: number) {
        this.percentual = percentual
    }

    realizaCalculo(orcamento: Orcamento): number {
        const valor = orcamento.produtos.reduce((acc, current) => acc + current.valor, 0)

        if (valor > 500) {
            return orcamento.valor * (1 - this.percentual)
        }
    
        return orcamento.valor
    }

}