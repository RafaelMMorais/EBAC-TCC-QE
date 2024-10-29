class cartTest {
    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).should('exist').click( {force: true} );
        cy.get(`.button-variable-item-${cor}`).should('be.visible').click();
        cy.get('.input-text').clear().type(quantidade);
        cy.get('.single_add_to_cart_button').click();
    }
}

export default new cartTest()