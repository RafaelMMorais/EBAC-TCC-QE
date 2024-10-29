Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    if (senha) { //Deixar a senha como campo opcional
        cy.get('#password').type(senha, { log: false })
    }
    cy.get('.woocommerce-form > .button').click()
})
