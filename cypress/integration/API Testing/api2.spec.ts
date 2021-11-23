/// <reference types="cypress" />

describe('api testing', ()=>{

    //Cypress.config('baseUrl', "https://api.plos.org/search?q=title:DNA")

    beforeEach(() => {
        cy.fixture('api').as('urls')
    })

    it('get journal', ()=>{
        cy.get('@urls').then((url:any) => {
            cy.request('GET', "https://api.plos.org/search?q=title:DNA").then((response) => {
                expect(response).to.have.property('status',200)
                expect(response.body).to.not.be.null
                expect(response.body.response).to.have.property('numFound',5513)
                expect(response.body.response.docs).to.have.length(10)
            })
        })
    })
 
})