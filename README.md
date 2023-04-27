# Catálogo de produtos

## Contexto

A varejista Descontrolada® identificou que está perdendo o controle sobre os produtos que ela vende.

Sendo assim a  empresa deseja implementar um sistema para ter mais confiabilidade nos registros.

## Demanda

Implementar um sistema web com duas páginas, a saber:

1. Página para o cadastro dos produtos, que deve apresentar os campos: **nome, preço de venda, descrição, quantidade, tipo\* e data de cadastro**.
    - *A varejista comercializa dois tipos de produto:
        - Orgânico, e;
        - Não orgânico.

2. Página para exibição dos produtos cadastrados, que deverá mostrar apenas 5 itens por página (de uma grid/tabela).

O sistema também deve possuir um menu que permita a navegação entre as duas páginas.

## Tecnologia a ser utilizada

Gostaríamos de ver uma solução *backend* desenvolvida em [ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) com [.NET (latest)](https://dotnet.microsoft.com/en-us/download).

O *frontend* pode ser elaborado com [Vue.js](https://vuejs.org/)/[Angular](https://angular.io/) (priorizando sempre as versões mais recentes e que faça uso do [TypeScript](https://www.typescriptlang.org/)) ou [Blazor](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor).

Para armazenamento dos dados, utilizar o [EF Core](https://github.com/dotnet/efcore), utilizando store local/em memória.
