/// <reference types="cypress" />

/*
Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma
Para visualizar meus pedidos

Regras de negócio:
• Somente usuários ativos podem fazer login;
• Deve exibir uma mensagem de erro caso o usuário erre o login e senha;
• Se o usuário errar por 3 vezes a senha, deve travar por 15 minutos o login
*/

let dadosLogin

context('Teste EBAC Shop -> Login', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('fxtPerfil').then(perfil => {
      dadosLogin = perfil
    })
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Login -> Deve fazer login com sucesso', () => {
    cy.fixture('fxtPerfil').then((dados) => {
      cy.login(dados.usuario, dados.senha)
    })
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ')
  });

  it('Login -> Deve barrar o login com senha inválida', () => {
    cy.fixture('fxtPerfil').then((dados) => {
      cy.login(dados.usuario2, dados.senha2)
    })
    cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
  });

  it('Login -> Deve barrar o login com usuário inexistente', () => {
    cy.fixture('fxtPerfil').then((dados) => {
      cy.login(dados.usuario3, dados.senha)
    })
    cy.get('.woocommerce-error').should('contain', 'não está registrado neste site.')
  });

  it('Login -> Deve validar que a senha é obrigatória para realizar o login', () => {
    cy.fixture('fxtPerfil').then((dados) => {
      cy.login(dados.usuario)
    })
    cy.get('.woocommerce-error').should('contain', 'O campo da senha está vazio.')
  });

  it('Login -> Deve bloquear o login por 15 minutos ao errar a senha 3x', () => {
    cy.fixture('fxtPerfil').then((dados) => {
      for (let i = 0; i < 3; i++) {
        cy.get('#username').clear()
        cy.get('#password').clear()
        cy.login(dados.usuario, dados.senha2)
      }
    })
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Conta bloqueada por 15 minutos')
  })
})