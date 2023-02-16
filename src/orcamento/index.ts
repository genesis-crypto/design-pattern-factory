import { Orcamento } from './orcamento'
import { Produto } from './interface/orcamento-interface'

export function criaOrcamento(produtos: Produto[]) {
    return new Orcamento(produtos)
}