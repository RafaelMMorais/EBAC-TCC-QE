/// <reference types="cypress" />

/*
Como admin da EBAC-SHOP
Quero criar um serviço de cupom
Para poder listar e cadastrar os cupons
*/

describe('TCC teste de API - Loja EBAC', () => {
    it.only('Deve receber a lsita de todos os cupons', () => {
        cy.request({
            method: 'GET',
            url:'/wc/v3/coupons',
            auth: {
                user: 'admin_ebac',
                pass: '@admin!&b@c!2022'
            }
        }).should((response) => {
            expect(response.status).equal(200)
        })
    });

    it('Deve receber um cupon especifico', () => {
        let id = '4666'
        cy.request({
            method: 'GET',
            url:`/wc/v3/coupons/${id}`,
            auth: {
                user: 'admin_ebac',
                pass: '@admin!&b@c!2022'
            }
        }).should((response) => {
            expect(response.status).equal(200)
        })
    });

    it('Deve cadastrar um cupom com sucesso', () => {
        cy.request({
            method: 'POST',
            url:'/wc/v3/coupons',
            auth: {
                user: 'admin_ebac',
                pass: '@admin!&b@c!2022'
            },
            body: {
                "code": "teste31",
                "amount": "31",
                "discount_type": "fixed_product",
                "description": "cupom teste de 50"
                }
        }).should((response) => {
            expect(response.status).equal(201)
        })
    });
});