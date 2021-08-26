describe('test case login', function(){
    beforeEach(()=>{
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('tc-01', function(){        
        cy.get('#et_pb_contact_name_0').type('Yasifa').should('have.value', 'Yasifa');
        cy.get('#et_pb_contact_email_0').type('ifharizky@gmail.com').should('have.value', 'ifharizky@gmail.com');
        cy.get('.et_pb_contact_submit').should('have.text', 'Email Me!').click()
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})