/// <reference types="cypress" />

/*
Como cliente da EBAC-SHOP
Quero adicionar produtos no carrinho
Para realizar a compra dos itens

Regras de negócio:
• Não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho;
• Os valores não podem ultrapassar a R$ 990,00;
• Valores entre R$ 200 e R$ 600 , ganham cupom de 10%
• Valores acima de R$ 600 ganham cupom de 15%
*/

let dadosLogin

context('Teste EBAC Shop -> Login', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('fxtPerfil').then(perfil => {
      dadosLogin = perfil
    })
    cy.fixture('fxtPerfil').then((dados) => {
      cy.login(dados.usuario, dados.senha)
    })
  });

  it('Teste carrinho de compras -> Deve adicionar um produto ao carrinho com sucesso', () => {

  });

  it('Teste carrinho de compras -> Deve aumentar a quantidade de um produto dentro do carrinho', () => {

  });

  it('Teste carrinho de compras -> Deve apresentar erro ao tentar ultrapassar o valor de R$990', () => {

  });

  it('Teste carrinho de compras -> Deve dar erro ao tentar incluir produto com quantidade inválida', () => {

  });
})