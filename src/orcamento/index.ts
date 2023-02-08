import { Orcamento } from './orcamento'

export function criaOrcamento(valor: number) {
    return new Orcamento(valor)
}