/// <reference types="cypress" />

describe('api testing', ()=>{

    Cypress.config('baseUrl', "http://dummy.restapiexample.com/api/v1")

    beforeEach(() => {
        cy.fixture('api').as('urls')
    })

    it('get all employees data', ()=>{
        cy.get('@urls').then((url:any) => {
            cy.request('GET', url.getAllEmployees).then((response) => {
                expect(response).to.have.property('status',200)
                expect(response.body).to.not.be.null
                expect(response.body.data).to.have.length(24)
            })
        })
    })

    it('get an employee data by id', ()=>{
        var id : number = 1
        cy.get('@urls').then((url:any) => {
            cy.request('GET', url.getEmployee+`${id}`).then((response) => {
                expect(response).to.have.property('status',200)
                expect(response.body).to.not.be.null
               
            })
        })
    })

    it('create an employee record', ()=>{
        const body = {"name":"test","salary":"123","age":"23"}
        cy.get('@urls').then((url:any) => {
            cy.request('POST', url.createRecord, body)
            .its('body')
            .its('data')
            .should('include', body)
        })
    })

    it('update employee name by id', ()=>{
        var id : number = 1
        const newName = {"name": "nataly"}
        cy.get('@urls').then((url:any) => {
            cy.request('GET', url.updateEmployee+`${id}`)
        })
    })

    it.only('delete employee record by id', ()=>{
        var id : number = 1
        cy.get('@urls').then((url:any) => {
            cy.request('PUT', url.deleteEmployee+`${id}`)
        })
    })
})