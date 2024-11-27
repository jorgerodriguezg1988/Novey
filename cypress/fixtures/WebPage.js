class WebPage {
    openUrl() {
      cy.visit("/")
    }

    openCart() {
      cy.visit("checkout/cart/")
    }

    openUrlProductoConfigurable() {
      //cy.visit("/silla-de-madera-modelo-baya")
    }

    
    







  }
  
  export default WebPage;
  