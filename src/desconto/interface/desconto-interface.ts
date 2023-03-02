import { Orcamento } from "../../orcamento/interface/orcamento-interface"

export interface Desconto {
    percentual: number
    realizaCalculo(orcamento: Orcamento): number
}