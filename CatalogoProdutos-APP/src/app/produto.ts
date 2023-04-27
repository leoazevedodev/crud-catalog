export interface Produtos {
    id: number;
    nome: string;
    preco_de_venda: number;
    descricao: string;
    quantidade: number;
    tipo: string;
    data_de_cadastro: Date;
}

export interface Message {
    message: string;
}