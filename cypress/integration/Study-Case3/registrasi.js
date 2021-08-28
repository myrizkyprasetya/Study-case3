describe('test case registrasi', function(){
    before(()=>{
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('tc-regist01', function(){  
        //proses registrasi      
        cy.get('#signin2').should('have.id', 'signin2').click()
        cy.get('#sign-username', { timeout: 5000 }).type('dojo-Luoyi')
        cy.get('#sign-username').should('have.value', 'dojo-Luoyi')
        cy.get('#sign-password', { timeout: 5000 }).type('dojo-luoyi')
        cy.get('#sign-password').should('have.value', 'dojo-luoyi')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('have.class', 'btn btn-primary').click()
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})