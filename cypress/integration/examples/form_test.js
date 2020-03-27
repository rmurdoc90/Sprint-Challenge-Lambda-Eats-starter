describe('Test inputs , selectors and submit form', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })
    it('Adds text, inputs and submits form', ()=>{
        cy.get('input[name="name"]')
        .type('Robert')
        .should("have.value","Robert")
        cy.get('select')
        .select('Small')
        .should('have.value','Small')
        
        .select('Medium')
        .should('have.value','Medium')  
        
        .select('Large')
        .should('have.value','Large')  
        
        .select('XL')
        .should('have.value','XL')    
        
        cy.get('[type="checkbox"]')
            .check()
            .should('be.checked')
        
        cy.get('input[name="instructions"]')
        .type('Drop the pizza at the doorstep')
        .should('have.value', 'Drop the pizza at the doorstep')

        cy.get('form')
            .submit()
        })
})