/// <reference types="cypress" />
let dadosLogin

context('Teste EBAC Shop -> Login', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
  });

  before(() => {
    cy.fixture('fxtPerfil').then(perfil => {
      dadosLogin = perfil
    })
  });

  it('Login -> Caminho Feliz', () => {
    cy.fixture('fxtPerfil').then((dados) => {
      cy.login(dados.usuario, dados.senha)
    })
    cy.get('.page-title').should('contain', 'Minha conta')
  });

  it('', () => {

  });
})