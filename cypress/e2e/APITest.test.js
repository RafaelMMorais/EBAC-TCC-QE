const request = require('supertest');
const apiUrl = 'http://lojaebac.ebaconline.art.br/wp-json';
const { faker } = require('@faker-js/faker');
import cuponsSchema from '../contracts/cupons.contrato'

/*
Como admin da EBAC-SHOP
Quero criar um serviço de cupom
Para poder listar e cadastrar os cupons
*/

describe('TCC teste de API - Loja EBAC', () => {
    it('Deve receber a lista de todos os cupons', async () => {
        const response = await request(apiUrl)
            .get('/wc/v3/coupons')
            .auth('admin_ebac', '@admin!&b@c!2022');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('Deve receber um cupom específico', async () => {
        const id = '4666';
        const response = await request(apiUrl)
            .get(`/wc/v3/coupons/${id}`)
            .auth('admin_ebac', '@admin!&b@c!2022');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', parseInt(id));
    });

    it('Deve cadastrar um cupom com sucesso', async () => {
        const crtCupom = {
            code: `teste${faker.commerce.price(10,50)}`,
            amount: faker.commerce.price(10, 50),
            discount_type: 'fixed_product',
            description: 'cupom teste de 50'
        };
        console.log(`Cupom criado: ${crtCupom.code}`)
        const response = await request(apiUrl)
            .post('/wc/v3/coupons')
            .auth('admin_ebac', '@admin!&b@c!2022')
            .send(crtCupom);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('code', crtCupom.code);
    });

    it('Deve barrar a listagem sem autorização', async () => {
        const response = await request(apiUrl)
            .get('/wc/v3/coupons')

        expect(response.status).toBe(401);
    });

    it('Deve barrar o cadastro de um cupom com codigo já existente', async () => {
        const crtCupom = {
            code: 'teste50',
            amount: faker.commerce.price(10, 50),
            discount_type: 'fixed_product',
            description: 'cupom teste de 50'
        };
        console.log(`Cupom criado: ${crtCupom.code}`)
        const response = await request(apiUrl)
            .post('/wc/v3/coupons')
            .auth('admin_ebac', '@admin!&b@c!2022')
            .send(crtCupom);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('code', "woocommerce_rest_coupon_code_already_exists");
    });

    it('Deve validar o contrato', async () => {
        cy.request('/wc/v3/coupons').then(response => {
            return cuponsSchema.validateAsync(response.body)
        })
    });
});
