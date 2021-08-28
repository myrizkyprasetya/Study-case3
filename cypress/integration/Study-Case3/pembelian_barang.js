describe('test case pembelian barang', function(){
    before(()=>{
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('tc-01', function(){
        //proses pembelian barang
        cy.wait(3000)
                
        cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch').should('have.text', 'Sony xperia z5').click()
        cy.wait(3000)

        cy.get('.col-sm-12 > .btn').should('have.text', 'Add to cart').click()
        cy.wait(3000)

        cy.get(':nth-child(4) > .nav-link').should('have.text', 'Cart').click()
        cy.wait(3000)

        cy.get('.col-lg-1 > .btn').should('have.text', 'Place Order').click()
        cy.wait(2000)
        
        //mengisi place order       
        cy.get('#name').type('Luoyi').should('have.value', 'Luoyi');
        cy.get('#country').type('Japan').should('have.value', 'Japan');
        cy.get('#city').type('Osaka').should('have.value', 'Osaka');
        cy.get('#card').type('62312345667').should('have.value', '62312345667');
        cy.get('#month').type('August').should('have.value', 'August');
        cy.get('#year').type('2021').should('have.value', '2021');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('have.class', 'btn btn-primary').click()
       
    })


    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})