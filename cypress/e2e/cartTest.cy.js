/// <reference types="cypress" />
import cartTest from "../support/page_objects/poProducts.page"

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

context('Teste EBAC Shop -> Carrinho de compras', () => {
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
    cy.fixture('fxtProduct').then(dados => {
      let prod = 1
      cartTest.buscarProduto(dados[prod].nomeProduto)
      cartTest.addProdutoCarrinho(
        dados[prod].tamanho,
        dados[prod].cor,
        dados[prod].quantidade)

      cy.get('.woocommerce-message').should('contain', dados[prod].nomeProduto)
    });
  });

  it('Teste carrinho de compras -> Deve aumentar a quantidade de um produto dentro do carrinho', () => {
    cy.fixture('fxtProduct').then(dados => {
      let prod = 1
      cartTest.buscarProduto(dados[prod].nomeProduto)
      cartTest.addProdutoCarrinho(
        dados[prod].tamanho,
        dados[prod].cor,
        dados[prod].quantidade)

      cy.get('.woocommerce-message').should('contain', dados[prod].nomeProduto)
      cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
      cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
      cy.get('.quantity > .input-text').clear().type("3")
      cy.get('.pull-right > .btn').click()
      cy.get('.woocommerce-message').should('contain', 'Carrinho atualizado.')
    });
  });

  it('Teste carrinho de compras -> Deve apresentar erro ao tentar ultrapassar o valor de R$990', () => {
    cy.fixture('fxtProduct').then(dados => {
      let prod = 0
      cartTest.buscarProduto(dados[prod].nomeProduto)
      cartTest.addProdutoCarrinho(
        dados[prod].tamanho,
        dados[prod].cor,
        dados[prod].quantidade)

      cy.get('.woocommerce-message').should('contain', dados[prod].nomeProduto)
    });

    cy.fixture('fxtProduct').then(dados => {
      let prod = 1
      cartTest.buscarProduto(dados[prod].nomeProduto)
      cartTest.addProdutoCarrinho(
        dados[prod].tamanho,
        dados[prod].cor,
        dados[prod].quantidade)

      cy.get('.woocommerce-message').should('contain', dados[prod].nomeProduto)
    });

    cy.fixture('fxtProduct').then(dados => {
      let prod = 2
      cartTest.buscarProduto(dados[prod].nomeProduto)
      cartTest.addProdutoCarrinho(
        dados[prod].tamanho,
        dados[prod].cor,
        dados[prod].quantidade)

      cy.get('.woocommerce-message').should('contain', dados[prod].nomeProduto)
    });

    cy.fixture('fxtProduct').then(dados => {
      let prod = 3
      cartTest.buscarProduto(dados[prod].nomeProduto)
      cartTest.addProdutoCarrinho(
        dados[prod].tamanho,
        dados[prod].cor,
        dados[prod].quantidade)
      cy.get('.woocommerce-message').should('contain', dados[prod].nomeProduto)
    });

    cy.visit('carrinho/')
  });

  it.only('Teste carrinho de compras -> Deve dar erro ao tentar incluir produto com quantidade inválida', () => {
    cy.fixture('fxtProduct').then(dados => {
      let prod = 4
      cartTest.buscarProduto(dados[prod].nomeProduto)
      cartTest.addProdutoCarrinho(
        dados[prod].tamanho,
        dados[prod].cor,
        dados[prod].quantidade)

      cy.get('.woocommerce-message').should('contain', 'Não é permitido inserir mais de 10 itens')
    });
  });
})