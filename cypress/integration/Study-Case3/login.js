describe('test case login', function(){
    before(()=>{
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('tc-login01', function(){        
        //proses login
        cy.get('#login2').should('have.id', 'login2').click()
        cy.get('#loginusername').type('dojo-Luoyi')
        cy.get('#loginusername').should('have.value', 'dojo-Luoyi')
        cy.get('#loginpassword').type('dojo-luoyi')
        cy.get('#loginpassword').should('have.value', 'dojo-luoyi')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('have.class', 'btn btn-primary').click()
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})