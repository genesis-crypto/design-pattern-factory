import { QuantidadeDesconto } from './desconto-quantidade'
import { ValorDesconto } from './desconto-valor'

export function fazerDescontoQuantidade(percentual: number) {
    return new QuantidadeDesconto(percentual)
}

export function fazerDescontoValor(percentual: number) {
    return new ValorDesconto(percentual)
}