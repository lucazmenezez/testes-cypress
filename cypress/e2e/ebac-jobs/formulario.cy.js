/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário ao formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('lucas menezes')
        cy.get('input[name="email"]').type('lucasmenezes@gmail.com')
        cy.get('input[name="telefone"]').type('41 987654321')
        cy.get('input[name="endereco"]').type('Rua Jest, bairro cypress, Curitiba - PR')
        cy.get('select[name="escolaridade"]').select('Outros')
        cy.get('#windows').check()
        cy.get('.Aplicacao_button__tw2AE').click()
        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
        cy.screenshot('tela-inscricao-preenchido')
    })
})