/// <reference types="cypress" />
let dadosLogin

context('Teste EBAC Shop -> Login', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('fxtPerfil').then(perfil => {
      dadosLogin = perfil
    })
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
    cy.get('.woocommerce-error').should('contain','não está registrado neste site.')
  });

  it('Login -> Deve validar que a senha é obrigatória para realizar o login', () => {
    cy.fixture('fxtPerfil').then((dados) => {
      cy.login(dados.usuario)
    })
    cy.get('.woocommerce-error').should('contain','O campo da senha está vazio.')
  });
})