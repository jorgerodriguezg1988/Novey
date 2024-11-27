class Cart {
    
    agregarProductoSimple() {
        cy.get('#maincontent > div.columns > div > div:nth-child(6) > div > div > div > div > div > ol > li:nth-child(1) > div > div.product-item-details > div.product-item-inner > div > div.actions-primary > form > div > button').click()
        cy.wait(1000)
        cy.get('#maincontent > div.columns > div > div.cart-container > div.cart-summary > div.cart-summary__child > ul > li:nth-child(2) > button').should('be.visible').click()
    }

    



  }
  
  export default Cart;